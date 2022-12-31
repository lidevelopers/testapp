import { h, VNode } from 'snabbdom';

import { _ } from './i18n';
import { PyChessModel } from "./types";


export function aboutView(model: PyChessModel): VNode[] {
    const untitled = [
        _("Many Thanks to gbtami and pychess developers to derive this project."),
    ]
    return [
        h('div.about', [
            h('img.center', { attrs: { src: `${model["asset-url"]}/favicon/favicon.png` } }),
            h('h1', { attrs: { align: 'center' } }, _('About Liantichess')),
            h('p', _('Liantichess is a free, open-source antichess server designed to play several antichess variants, derived from pychess.')),
            h('p', [
                // TODO Automate the generation of this list
<<<<<<< HEAD
                _("All supported games on Liantichess can be found "),
                h('a', { attrs: { href: 'https://liantichess.herokuapp.com/variants' } }, 'here'),
                "."
=======
                _("Currently supported games are "),
                h('a', { attrs: { href: 'https://www.pychess.org/variants/makruk' } }, 'Makruk'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/makpong' } }, 'Makpong'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/cambodian' } }, 'Ouk Chaktrang'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/sittuyin' } }, 'Sittuyin'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/asean' } }, 'ASEAN Chess'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/shogi' } }, 'Shogi'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/minishogi' } }, 'Minishogi'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/kyotoshogi' } }, 'Kyoto shogi'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/dobutsu' } }, 'Dobutsu shogi'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/gorogoro' } }, 'Gorogoro shogi'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/xiangqi' } }, 'Xiangqi'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/manchu' } }, 'Manchu'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/janggi' } }, 'Janggi'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/minixiangqi' } }, 'Minixiangqi'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/placement' } }, 'Placement'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/crazyhouse' } }, 'Crazyhouse'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/atomic' } }, 'Atomic'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/duck' } }, 'Duck chess'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/seirawan' } }, 'S-chess'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/capablanca' } }, 'Capablanca'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/gothic' } }, 'Gothic'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/grand' } }, 'Grand'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/shako' } }, 'Shako'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/shogun' } }, 'Shogun'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/orda' } }, 'Orda'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/synochess' } }, 'Synochess'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/hoppelpoppel' } }, 'Hoppel-Poppel'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/shinobi' } }, 'Shinobi'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/empire' } }, 'Empire'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/ordamirror' } }, 'Orda Mirror'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/chak' } }, 'Chak'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/chennis' } }, 'Chennis'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/shouse' } }, 'S-house (S-chess+Crazyhouse)'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/capahouse' } }, 'Capahouse (Capablanca+Crazyhouse)'),
                ", ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/grandhouse' } }, 'Grandhouse (Grand+Crazyhouse)'),
                ", and ",
                h('a', { attrs: { href: 'https://www.pychess.org/variants/chess' } }, 'Chess.'),
>>>>>>> fe6702db28c00ed0ef482e461ce11792c741d575
            ]),
            h('p', [
                _('Additionally, you can check the Chess960 option for few antichess variants to start games from random positions with '),
                h('a', { attrs: { href: 'https://en.wikipedia.org/wiki/Fischer_random_chess#Castling_rules' } }, _('Chess960 castling rules.'))
            ]),
            h('p', [
                _('For move generation, validation, analysis, and engine play, we use '),
                h('a', { attrs: { href: 'https://github.com/ianfab/Fairy-Stockfish' } }, 'Fairy-Stockfish'),
                ", ",
                h('a', { attrs: { href: 'https://github.com/ianfab/fairy-stockfish.wasm' } }, 'fairy-stockfish.wasm'),
                ", ",
                h('a', { attrs: { href: 'https://github.com/TheYoBots/fairyfishnet' } }, 'fairyfishnet'),
                ", and ",
                h('a', { attrs: { href: 'https://github.com/gbtami/lichess-bot-variants' } }, 'lichess-bot-variants.'),
            ]),
            h('p', [
                _('On client side, the user interface of the game board is based on '),
                h('a', { attrs: { href: 'https://github.com/gbtami/chessgroundx' } }, 'chessgroundx.'),
            ]),
            h('p', [
                _('The source code of the server is available on '),
                h('a', { attrs: { href: 'https://github.com/SriMethan/liantichess' } }, 'GitHub.'),
            ]),
            h('hr'),
            h('p', [
                _('To play on Liantichess, you need to have an open and unmarked account on Lichess. '),
                _('Regarding Privacy and Terms of Service, the rules of lichess.org are also applied here. '),
                h('a', { attrs: { href: 'https://lichess.org/privacy' } }, 'Privacy'),
                ", ",
                h('a', { attrs: { href: 'https://lichess.org/terms-of-service' } }, 'ToS'),
            ]),
            h('hr'),
            h('p', untitled.map(paragraph => h('p', paragraph))),
        ]),
    ];
}