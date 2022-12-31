# [LiAntichess](https://liantichess.herokuapp.com)

[![Nodejs-CI](https://github.com/SriMethan/Liantichess/actions/workflows/nodejs.yml/badge.svg)](https://github.com/SriMethan/Liantichess/actions/workflows/nodejs.yml) [![Liantichess](https://img.shields.io/badge/Liantichess-%40players-blue.svg)](https://liantichess.herokuapp.com/players)

Liantichess is a free, open-source antichess variants server designed to play antichess and antichess variants.

<<<<<<< HEAD
All supported games on Liantichess can be seen [here](https://liantichess.herokuapp.com/variants)
=======
Currently supported games are:

- [Makruk](https://www.pychess.org/variants/makruk)
- [Makpong](https://www.pychess.org/variants/makpong)
- [Ouk Chatrang](https://www.pychess.org/variants/cambodian)
- [Sittuyin](https://www.pychess.org/variants/sittuyin)
- [ASEAN Chess](https://www.pychess.org/variants/asean)
- [Shogi](https://www.pychess.org/variants/shogi)
- [Minishogi](https://www.pychess.org/variants/minishogi)
- [Kyoto shogi](https://www.pychess.org/variants/kyotoshogi)
- [Dobutsu shogi](https://www.pychess.org/variants/dobutsu)
- [Goro-Goro shogi](https://www.pychess.org/variants/gorogoro)
- [Tori Shogi](https://www.pychess.org/variants/torishogi)
- [Xiangqi](https://www.pychess.org/variants/xiangqi)
- [Manchu](https://www.pychess.org/variants/manchu)
- [Janggi](https://www.pychess.org/variants/janggi)
- [Minixiangqi](https://www.pychess.org/variants/minixiangqi)
- [Placement chess](https://www.pychess.org/variants/placement)
- [Crazyhouse](https://www.pychess.org/variants/crazyhouse)
- [Atomic](https://www.pychess.org/variants/atomic)
- [Duck chess](https://www.pychess.org/variants/duck)
- [S-chess](https://www.pychess.org/variants/seirawan)
- [Capablanca](https://www.pychess.org/variants/capablanca)
- [Gothic](https://www.pychess.org/variants/gothic)
- [Grand](https://www.pychess.org/variants/grand)
- [Shako](https://www.pychess.org/variants/shako)
- [Shogun](https://www.pychess.org/variants/shogun)
- [Orda](https://www.pychess.org/variants/orda)
- [Synochess](https://www.pychess.org/variants/synochess)
- [Hoppel-Poppel](https://www.pychess.org/variants/hoppelpoppel)
- [Shinobi](https://www.pychess.org/variants/shinobi)
- [Empire Chess](https://www.pychess.org/variants/empire)
- [Orda Mirror](https://www.pychess.org/variants/ordamirror)
- [Chak](https://www.pychess.org/variants/chak)
- [Chennis](https://www.pychess.org/variants/chennis)
- [S-house (S-chess+Crazyhouse)](https://www.pychess.org/variants/shouse)
- [Capahouse (Capablanca+Crazyhouse)](https://www.pychess.org/variants/capahouse)
- [Grandhouse (Grand chess+Crazyhouse)](https://www.pychess.org/variants/grandhouse)
- [Chess](https://www.pychess.org/variants/chess)

Additionally you can check Chess960 option in for Chess, Crazyhouse, Atomic, S-chess, Capablanca and Capahouse to start games from random positions with 
[Chess960 castling rules](https://en.wikipedia.org/wiki/Fischer_random_chess#Castling_rules)
>>>>>>> fe6702db28c00ed0ef482e461ce11792c741d575

For move generation, validation, analysis and engine play it uses
- [Fairy-Stockfish](https://github.com/ianfab/Fairy-Stockfish)
- [fairy-stockfish.wasm](https://github.com/theyobots/stockfish.wasm)
- [fairyfishnet](https://github.com/theyobots/fairyfishnet) fork of [fairyfishnet](https://github.com/gbtami/fairyfishnet)
- [lichess-bot-variants](https://github.com/gbtami/lichess-bot-variants) fork of [lichess-bot](https://github.com/ShailChoksi/lichess-bot)

On client side it is based on [chessgroundx](https://github.com/gbtami/chessgroundx) fork of [chessground](https://github.com/ornicar/chessground)

For managing titles it uses
- [Liantichesstitles](https://github.com/SriMethan/liantichesstitles)

##

<<<<<<< HEAD
liantichess is a free server and it will remain free forever.
=======
As you know, pychess-variants is a free server and it will remain free forever. However, maintaining and improving the server costs time and money.

If you like our work and find our server useful, please donate through [patreon](https://www.patreon.com/pychess) or directly through [paypal](https://www.paypal.com/paypalme/gbtami)!!
Your contribution will be greatly appreciated and help me continue to develop this awesome server.
>>>>>>> 11e958d9a04568bda7765aeb2d0e609ceec0f6e6

## Installation

### Prerequisites
* You need mongodb up and running. [Mongo daemon](https://www.mongodb.com/docs/manual/installation/)

```
pip3 install -r requirements.txt --user 
yarn install                            
yarn dev                                
yarn md                
python3 server/server.py
```

The Wiki further describes [how to setup a development environment](https://github.com/SriMethan/Liantichess/wiki/Setting-up-a-Liantichess-Development-environment-locally).

## Supported browsers

Liantichess should support almost all browsers. Though older browsers (including any version of Internet Explorer) will not work. For your own sake, please upgrade. Security and performance, think about it!

Only [Fairy-Stockfish analysis](https://liantichess.herokuapp.com/analysis/antichess) might not work on all browsers. The browser support can be found [here](https://github.com/TheYoBots/stockfish.wasm#requirements).

## Credits

Credits to [gbtami](https://github.com/gbtami) for the main [code](https://github.com/gbtami/pychess-variants)
