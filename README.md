# README
<br>
Discord.js v14用Glitchのテンプレートです。  
このテンプレートでできるのは
<br>

* コマンドの作成
* メッセージに反応 

<br>

tokenの作成等コードを書く前にやるべきことが終わっていない場合 

最下部の参考記事をご覧ください

<br>



<br> 

# 最初にやること 

`.env`にて
* token
* clientId
* guildId ※1

の三つをそれぞれに対応するValueに入力してください。 

※1 guildIdはサーバーIDです。

<br>

## 注意

`server.js`と`deploy-commands.js`は変更しないでください。

<br>

## コマンドとメッセージの作り方

コマンドは`commands/fun/`に入れてください。  
メッセージに反応は`events/`に入れてください。  
<br>
それぞれの作成テンプレートをそれぞれのフォルダ内に`.rei.txt`として入っています。  
コピペしてご使用ください。  

<br>

# 最後に 

Discordjs-Japanさんの記事を参考にさせていただきました。  
参考にさせていただいた記事は[こちら](https://scrapbox.io/discordjs-japan/Glitch%E3%81%A7BOT%E3%82%92%E4%BD%9C%E3%82%8B%E6%89%8B%E9%A0%86)です。  
GlitchのURLは[こちら](https://glitch.com/edit/#!/discordjs-v14-node-v16-templates)です。