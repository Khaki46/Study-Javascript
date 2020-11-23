        var content=document.getElementById("content");
        var liList=content.getElementsByTagName("li");

        var box=document.getElementById("box");
        var divList=box.getElementsByTagName("div");
        for(var i=0;i<liList.length;i++){
            liList[i].index=i;
            liList[i].onclick = function(){
                // document.divList[this.index].sty
                for(var a=0;a<liList.length;a++){
                    divList[a].style.display="none";
                }
                divList[this.index].style.display="inline";
            }
        }