 import { ValueOrArray, Json, TJSON, HypertextNode, TD } from "./common";
 let t = {};
 let list;
 let dev: TD = {
   start: '06-07-21',
   end: '08-08-21',
 }
 export class Table {
   map: TD = {
     uBlack_Square: 9632,
     u1922: ' ⃫ ', // 8427, двойной слеш Перекрывающая двойная косая черта :U+20EB
     uCursor: '▝', // 9629,//Квадрант сверху справа U+259D
     /*uCursor: '▘', // 9624 Квадрант сверху слева     U+2598
     uCursor: '▗', //9623 Quadrant Lower Right U+2597
     uCursor: '▖', // 9622Quadrant Lower Left U+2596
     uCursor: '■ ', // 9632Black Square  U+25A0 Черный квадрат*/
     uArrows_21E8: 8658, //U+21E8
     uArrow6: 9658, // Black Right-Pointing Small Triangle U+25B8
     uArrow2: 9662, //CSS-код    U+25BE

     //h46:9642,//U+25AA    
     //
     //
     //

     lArrow6: 9658, //Black Right-Pointing Small Triangle U+25B8
     lArrow2: 9662, //CSS-код    U+25BE
     l46: '─', // 9472, 
     //
     l82: '│', //9474
     //
     l7: '┌', // 9484
     //
     l8: '┬', // 9516
     //
     l2: '┴', // 9524


     l9: '┐', // 9488
     //
     l4: '├', // 9500 U+251C
     //
     l5: '┼', // 9532 U+253C
     //
     l6: '┤', // 9508
     //
     l1: '└', // 9492
     //
     l3: '┘', // 9496
     //
     //
     //
     dArrows_21E8: 8658, // 8658,
     d46: '═', // 9552
     //
     d82: '║', // 9553
     //

     d7488: '╒', // 9554  U+2552        
     //
     d7448: '╓', // 9555   U+2553
     //
     d7: '╔', // 9556     U+2554
     //
     //
     d855: '╥', // 9573  U+2565
     //
     d885: '╤', // 9572  U+2564
     //
     d8: '╦', // 9574     U+2566
     //
     //
     d225: '╧', // 9575  U+2567
     //
     d255: '╨', // 9576  U+2568
     //
     d2: '╩', // 9577  U+2569
     //
     //

     d6988: '╕', // 9557  U+2555
     //
     d6698: '╖', // 9558  U+2556
     //     
     d9: '╗', // 9559  U+2557
     //
     //
     d445: '╟', // 9567  U+255F

     d4: '╠', // 9568 
     //


     d5: '╬', // 9580 

     //
     d665: '╢', // 9570  U+2562
     d6: '╣', // 9571 
     //
     //
     d4122: '╘', // 9560  U+2558
     //
     d4412: '╙', // 9561  U+2559
     //
     d1: '╚', // 9562  U+255A
     //
     //
     d6322: '╛', // 9563  U+255B
     //
     d6632: '╜', // 9564  U+255C
     //
     d3: '╝', // 9565   U+255D
     //
     //heavy
     //

     h46: '━', // 9473
     //
     h885: '┯', // 9519 U+252F

     h82: '┃', // 9475
     //

     h4788: '┍', // 9485    U+250D
     h4478: '┎', // 9486     U+250E
     h7: '┏', // 9487

     //
     h8: '┳', // 9523
     //
     h225: '┷', // 9527    U+2537
     h2: '┻', // 9531     
     //
     h6988: '┑', // 9489    U+2511
     h6698: '┒', // 9490    U+2512
     h9: '┓', // 9491
     //
     h445: '┠', // 9504    U+2520
     h4: '┣', // 9507
     //
     h5: '╋', // 9547
     //
     h665: '┨', // 9512 U+2528 
     h6: '┫', // 9515
     //
     h1: '┗', // 9495
     //
     h3: '┛', // 9499
   }
   uns(u: number): string {
     return String.fromCharCode(u)
   }

   us(code: number): string {
     for (let symbCode in this.map) {
       if (this.map[symbCode] == code) return this.uns(code);
     }
     return "";
   }
   pseudoSymUnicode(msg: any, list: any[], style: any, set: string) {
     let t: string = "";
     let s: string;
     list.forEach((item, index, arr) => {
       s = item.toString();
       //console.log('set + item=', s);
       //t['hex' + item] = uns(map[set + s]).charCodeAt(0).toString(16);
       if (this.map) {
         t['c' + item] = this.uns(Number(this.map[set + s]))
         t['d' + item] = this.uns(Number(this.map['d' + s]));
         t['h' + item] = this.uns(Number(this.map['h' + s]));
         t['l' + item] = this.uns(Number(this.map['l' + s]));
       }
     })


     //t.cArrows_21E8 - uns(map.uArrows_21E8);
     //t.copyright = '\u00a9';

     return t
   }
 }
 /*list = [445, 46, 82, 7, 7448, 885, 8, 9, 4, 5, 6, 65, 665, 1, 2, 225, 3];
 pseudoSymUnicode('createTable', list, "", 'h');
 list = ['Cursor', 'Arrows', 'Romb', 'Arrow6', 'Arrow2'];
 pseudoSymUnicode('createTable', list, "", 'u');
 //console.log('uns(map.h8=',uns(map.h8))

 //exx('t.js')
 module.exports = t;
 */