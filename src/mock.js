import sha256 from 'sha256'

export default async ({ sequelize }) => {
    const user = await sequelize.models.User.findOne()
    if (!user) await sequelize.models.User.bulkCreate([
        {
            username: 'John',
            userImg: 'john.png',
            password: sha256('secret'),
        },
        {
            username: 'Robert',
            userImg: 'robert.jpg',
            password: sha256('secret'),
        },
        {
            username: 'Tom',
            userImg: 'tom.jpg',
            password: sha256('secret'),
        }
    ])

    const message = await sequelize.models.Message.findOne()
    if (!message) await sequelize.models.Message.bulkCreate([
        {
            messageFrom: 1,
            messageTo: 2,
            messageBody: 'Hi, Robert!',
            messageType: 'plain/text',
        },
        {
            messageFrom: 2,
            messageTo: 1,
            messageBody: 'Hi, John! What`s up dude?',
            messageType: 'plain/text',
        },
        {
            messageFrom: 1,
            messageTo: 2,
            messageBody: 'Not bad man. I`m getting high now brother, I`m smoking a hookah!',
            messageType: 'plain/text',
        },
        {
            messageFrom: 1,
            messageTo: 2,
            messageBody: 'hookah.mp4',
            messageType: 'video/mp4',
        },
        {
            messageFrom: 2,
            messageTo: 3,
            messageBody: 'Are you going to class, Tom?',
            messageType: 'plain/text',
        },
        {
            messageFrom: 3,
            messageTo: 2,
            messageBody: 'No, why is it needed?',
            messageType: 'plain/text',
        },
        {
            messageFrom: 3,
            messageTo: 1,
            messageBody: 'Let`s go swimming?',
            messageType: 'plain/text',
        },
        {
            messageFrom: 1,
            messageTo: 3,
            messageBody: 'No bro, I need to study!',
            messageType: 'plain/text',
        }
    ])
}