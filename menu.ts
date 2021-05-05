const Commands = new discord.command.CommandGroup();
let MSGID = '';
let AUTHORID = '';
const embedColor = 0x3f888f;

Commands.raw(
  {
    name: 'menu',
    aliases: ['help'],
    description: 'Displays help options'
  },
  async (msg) => {
    await msg.reply(new discord.Embed({
      color: embedColor,
      title: 'Help menu',
      description: `What do you need help with?

1️⃣: Commands

2️⃣: New to discord

3️⃣: How to get a mod

4️⃣: How to get special ranks`
    })).then(async (m) => {
      await m.addReaction('1️⃣');
      await m.addReaction('2️⃣');
      await m.addReaction('3️⃣');
      await m.addReaction('4️⃣');
      await m.addReaction('❌');
      
      
      MSGID = m.id;
      AUTHORID = msg.author.id;
    });
  }
);

discord.registerEventHandler('MESSAGE_REACTION_ADD', async (theReaction) => {
  const guild = await discord.getGuild();

  const theMsg = await (await discord.getGuildTextChannel(
    theReaction.channelId
  )).getMessage(theReaction.messageId);

  if (
    theReaction.emoji.name == '1️⃣' &&
    theReaction.messageId == MSGID &&
    theReaction.member.user.id == AUTHORID
  ) {
    const option1 = new discord.Embed();
    await option1.setColor(0x3f888f);
    await option1.setTitle('Commads');
    await option1.setDescription('Need a list of commands? Use `!commands`');
    const theMsg2 = await theMsg.reply(option1);
    MSGID = '';
    AUTHORID = '';
    await theMsg.delete();
  }

  if (
    theReaction.emoji.name == '2️⃣' &&
    theReaction.messageId == MSGID &&
    theReaction.member.user.id == AUTHORID
  ) {
    const option2 = new discord.Embed();
    await option2.setColor(0x3f888f);
    await option2.setTitle('New to discord');
    await option2.setDescription(
      `Find a begginer tutorial to discord [here](https://www.youtube.com/watch?v=rnYGrq95ezA)`
    );
    const theMsg3 = await theMsg.reply(option2);
    MSGID = '';
    AUTHORID = '';
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '3️⃣' &&
    theReaction.messageId == MSGID &&
    theReaction.member.user.id == AUTHORID
  ) {
    const option3 = new discord.Embed();
    await option3.setColor(0x3f888f);
    await option3.setTitle('How to get a mod');
    await option3.setDescription('Please apply as a mod by dming an admin');

    const theMsg4 = await theMsg.reply(option3);
    MSGID = '';
    AUTHORID = '';
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '4️⃣' &&
    theReaction.messageId == MSGID &&
    theReaction.member.user.id == AUTHORID
  ) {
    const option4 = new discord.Embed();
    await option4.setColor(0x3f888f);
    await option4.setTitle('How to get special ranks');
    await option4.setDescription(
      'Go to #autoroles and asign yourself roles by reacting to the messages there'
    );

    const theMsg4 = await theMsg.reply(option4);
    MSGID = '';
    AUTHORID = '';
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '❌' &&
    theReaction.messageId == MSGID &&
    theReaction.member.user.id == AUTHORID
  ) {
    const option8 = new discord.Embed();
    await option8.setColor(0x3f888f);
    await option8.setTitle('**Canceled**');
    await option8.setDescription(`You chanceled the command selection`);

    const theMsg4 = await theMsg.reply(option8);
    MSGID = '';
    AUTHORID = '';
    await theMsg.delete();
    setTimeout(() => theMsg4.delete(), 5000);
  }
});
