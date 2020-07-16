"use strict"
function dijkstra(beg, fin) {
  //  console.log(beg + "," + fin);
    const maxint= 999999999;
    var Dmat = [];//D矩阵初始化
    var i, j, k, q;
    for (i = 0; i < pnum; i++) {
        Dmat[i] = [];
        for (j = 0; j < pnum; j++) {
            Dmat[i][j] = maxint;
        }
    }
    var bbb, fff;
    var brow1, frow1;
    for (i = 0; i < lnum; i++) {
        bbb = po[i][1];//弧段起点
        fff = po[i][2];//弧段终点
        //找对应点在data中的行号,这就是D和data的对应关系
        for (q = 0; q < pnum; q++) {
            if (p[q][0] - 1 === bbb) {
                brow1 = q;
            } else if (p[q][0] - 1 === fff) {
                frow1 = q;
            }
        }
        //更新D
        Dmat[brow1][frow1] = po[i][7];
    }
   // console.log(brow1, frow1);
    for (i = 0; i < pnum; i++) {
        Dmat[i][i] = 0;
    }
    var dist = [];
    var S = [];
    var max;
    var mark2;
    for (j = 0; j < pnum; j++) {
        dist[j] = Dmat[beg][j];
        S.push("false");
        if (dist[j] == maxint) {
            PP[j] = -1;
        } else {
            PP[j] = beg;
        }
    }
    S[beg] = "true";
    for (i = 0; i < pnum; i++) {
        max = maxint;
        for (j = 0; j < pnum; j++) {
            if (S[j] == "false" && dist[j] < max) {
                max = dist[j];
                mark2 = j;
            }
        }    
        S[mark2] = "true";
        for (k = 0; k < pnum; k++) {
            if (S[k] == "false" && Dmat[mark2][k] < maxint) {
                if ((dist[mark2] + Dmat[mark2][k]) < dist[k]) {
                    dist[k] = dist[mark2] + Dmat[mark2][k];
                    PP[k] = mark2;
                }
            }
        }
    }
  //  console.log(Dmat);
  //  console.log(PP);
  /*  console.log(S);
    console.log(Dmat);
    console.log(mark2);*/
   // console.log(prev);
}