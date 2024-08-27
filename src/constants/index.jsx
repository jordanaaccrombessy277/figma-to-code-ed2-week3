import { home,home_white,news,news_white,activities,
    activities_white,cards,cards_white,reports,reports_white,
    settings,settings_white,sui,toncoin,ginnan,solana } from "../assets"


export const menu = [
    {
        'title':'Dashboard',
        'icon': home,
        'icon_white':home_white,
        'link':'/',
        'subMenu':false
    },
    {
        'title':'News',
        'icon':news,
        'icon_white':news_white,
        'link':'/news',
        'subMenu':false
    },
    {
        'title':'Activities',
        'icon':activities,
        'icon_white':activities_white,
        'link':'/activities',
        'subMenu':false
    },
    {
        'title':'Cards',
        'icon':cards,
        'icon_white':cards_white,
        'link':'/cards',
        'subMenu':false
    },
    {
        'title':'Reports',
        'icon':reports,
        'icon_white':reports_white,
        'link':'/reports',
        'subMenu':true
    },
    {
        'title':'Settings',
        'icon':settings,
        'icon_white':settings_white,
        'link':'/settings',
        'subMenu':false
    }, 
    {
        'title':'Login',
        'icon':'',
        'icon_white':'',
        'link':'/login',
        'subMenu':false
    }, 
    {
        'title':'Sign-up',
        'icon':'',
        'icon_white':'',
        'link':'/sign-up',
        'subMenu':false
    }
]

export const trending = [
    {
        'title':'Sui',
        'subtitle':'SUI',
        'image':sui,
        'percent':'-10.5%',
        'isPositif':false,
        'number':'1.56 SUI',
        'dollars':'$2,455,806,673'
    },
    {
        'title':'Ginnan The...',
        'subtitle':'GINNAN',
        'image':ginnan,
        'percent':'+3.2%',
        'isPositif':true,
        'number':'8.36 GINNAN',
        'dollars':'$34,007,492'
    },
    {
        'title':'Toncoin',
        'subtitle':'TON',
        'image':toncoin,
        'percent':'+07.5%',
        'isPositif':true,
        'number':'6.95 TON',
        'dollars':'$17,524,537,268'
    },
    {
        'title':'Solana',
        'subtitle':'SOL',
        'image':solana,
        'percent':'-0.05%',
        'isPositif':false,
        'number':'143.75 SOL',
        'dollars':'$67,116,052,623'
    }
]


