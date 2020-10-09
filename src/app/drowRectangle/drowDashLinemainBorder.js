 // Отступ от стен

 let drowDashLinemainBorder = (id, ctx, pleft, ptop, pright, pbottom) => {
     let drowPlan = document.getElementById(id);
     let currentClientWidth = drowPlan.clientWidth;
     let currentClientHeight = drowPlan.clientHeight;

     let drow = (ctx, clientWidth, clientHeight, pleft, ptop, pright, pbottom) => {
         ctx.setLineDash([4, 6]);
         ctx.beginPath();


         ctx.moveTo(pleft, ptop);
         ctx.lineTo(pleft, clientHeight - pbottom);
         ctx.lineTo(clientWidth - pright, clientHeight - pbottom);
         ctx.lineTo(clientWidth - pright, ptop);
         ctx.lineTo(pleft, ptop);
         ctx.stroke();

         ctx.setLineDash([]);
     }

     //  let myMockContext = new C2S(500, 500);
     //  drow(myMockContext, currentClientWidth, currentClientHeight, pleft, ptop, pright, pbottom);
     // goSVG.push(myMockContext.getSerializedSvg());

     drow(ctx, currentClientWidth, currentClientHeight, pleft, ptop, pright, pbottom);
 }

 export default drowDashLinemainBorder;