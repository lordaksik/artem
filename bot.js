require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN || 8080)
bot.start((ctx) => {
  ctx.reply(`Привет ${ctx.message.from.first_name}`)
  console.log(ctx.message)
})
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
  async function request() {
    const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
    const data = await response.json()
    const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/2/")
    const data2 = await response2.json()
    const response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/3/")
    const data3 = await response3.json()
    const response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/4/")
    const data4 = await response4.json()
    let result = 0;
    let result2 = 0;
    let result22 = 0;
    let result3 = 0;
    let result4 = 0;
    let result5 = 0;
    mast1=0;
      mast2=0;
      mast3=0;
      mast4=0;
    score_dealer = data.items.results[0].results.score_dealer

    for (let i = 0; i <= 29; i++) {
      score_dealer = data.items.results[i].results.score_dealer
      score_player = data.items.results[i].results.score_player
      // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
      if ((score_player == 3 && (score_dealer == 2 || score_dealer == 8 || score_dealer == 3))
        || (score_player == 13 && (score_dealer == 13 || score_dealer == 8 || score_dealer == 14))
        || (score_player == score_dealer) || (score_player == 8) || (score_dealer == 8))
        result = result + 1;
    }
    console.log(result);
    if (result == 0) { ctx.reply('Больших кэфов давно не было 30 минут'); }

    for (let i = 0; i <= 29; i++) {
      score_dealer = data.items.results[i].results.score_dealer
      score_player = data.items.results[i].results.score_player
      if ((score_player == 8) || (score_dealer == 8))
        result2 = result2 + 1;

    }
    for (let i = 0; i <= 9; i++) {
      score_dealer2 = data2.items.results[i].results.score_dealer
      score_player2 = data2.items.results[i].results.score_player
      if ((score_player2 == 8) || (score_dealer2 == 8))
        result22 = result22 + 1;

    }
    if (result2 == 0 && result22 == 0) { ctx.reply('Не было 8 уже 40 минут'); }

    for (let i = 0; i <= 29; i++) {
      score_dealer = data.items.results[i].results.score_dealer
      score_player = data.items.results[i].results.score_player
      if (score_player == 8)
        result4 = result4 + 1;
    }
    let result44 = 0;
    for (let i = 0; i <= 29; i++) {
      score_dealer2 = data2.items.results[i].results.score_dealer
      score_player2 = data2.items.results[i].results.score_player
      if (score_player2 == 8)
        result44 = result44 + 1;
    }
    if (result4 == 0 && result44 == 0) { ctx.reply('Не было 8 у игрока уже 60 минут (вертикаль)'); }
    for (let i = 0; i <= 29; i++) {
      score_dealer = data.items.results[i].results.score_dealer
      score_player = data.items.results[i].results.score_player
      if (score_dealer == 8)
        result5 = result5 + 1;
    }
    let result55 = 0
    for (let i = 0; i <= 29; i++) {
      score_dealer2 = data2.items.results[i].results.score_dealer
      score_player2 = data2.items.results[i].results.score_player
      if (score_player2 == 8)
        result55 = result55 + 1;
    }

    if (result5 == 0 && result55 == 0) { ctx.reply('Не было 8 у дилера уже 60 минут (вертикаль)'); }
    for (let i = 0; i <= 29; i++) {
      score_dealer = data.items.results[i].results.score_dealer
      score_player = data.items.results[i].results.score_player

      if (score_player == score_dealer)
        result3 = result3 + 1;
    }
    let result12 = 0;
    for (let i = 0; i <= 29; i++) {
      score_dealer2 = data2.items.results[i].results.score_dealer
      score_player2 = data2.items.results[i].results.score_player

      if (score_player2 == score_dealer2)
        result12 = result12 + 1;
    }
    let result13 = 0;
    for (let i = 0; i <= 29; i++) {
      score_dealer3 = data3.items.results[i].results.score_dealer
      score_player3 = data3.items.results[i].results.score_player
      if (score_player3 == score_dealer3)
        result13 = result13 + 1;
    }
    let result14 = 0;
    for (let i = 0; i <= 29; i++) {
      score_dealer4 = data4.items.results[i].results.score_dealer
      score_player4 = data4.items.results[i].results.score_player

      if (score_player4 == score_dealer4)
        result14 = result14 + 1;
    }
    if (result3 == 0 && result12 == 0 && result13 == 0 && result14 == 0) { ctx.reply('Не было ничьи 120 минут'); }
  for (let i = 0; i < 30; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit
        
        if(score_dealer!='diamonds' && score_player!='diamonds')
        mast1=mast1+1;
   
    }
    
    if(mast1==30)
    {ctx.reply('Буби не было 6 раздач')}
    //diamonds- буби
    //clubs - крести
    //spades - пики
    //hearts - чирва
    //
    for (let i = 0; i < 30; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       if(score_dealer!='clubs' && score_player!='clubs')
       mast2=mast2+1;
   
   }
   if(mast2==30)
   {ctx.reply('Крести не было 30 раздач')}
   for (let i = 0; i < 30; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       if(score_dealer!='spades' && score_player!='spades')
       mast3=mast3+1;
   
   }
   
   if(mast3==30)
   {ctx.reply('Пики не было 6 раздач')}
   for (let i = 0; i < 30; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
   
       if(score_dealer!='hearts' && score_player!='hearts')
       mast4=mast4+1;
   
   }
   
   if(mast4==30)
   {ctx.reply('Чирвы не было 30 раздач')}
  }




  function good() {
    try {
      ctx.reply("Вы запустили Бота на стратегию «Большие кэфы» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
      ctx.reply("Удачи! По всем вопросам пишите @BetgamesTV_Admin");
      global.time = setInterval(request, 90000)
    } catch (err) {
      ctx.reply("Ошибка сообще мне");
    }
  }



  good()
}
)
bot.hears('/end', async (ctx) => {
  try {
    clearInterval(time);
    clearInterval(time2);
    ctx.reply("Пока");
  } catch (err) {
    ctx.reply("Этот бот и так выключен");
  }
})
bot.launch()

