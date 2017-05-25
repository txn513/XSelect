window.XSelect = (function(){
	var DropDown = function(el){
		this.dd = el; //
        this.val = '';
        this.initEvents();
	};


	DropDown.prototype = {
		initEvents: function() {
	        
	        var obj = this;
            var oXSelect = document.querySelectorAll(obj.dd);


            oXSelect.forEach(function(e,i){
            	var oLis = e.querySelectorAll('li');
            	var oSpan = e.querySelector('span');

            	e.addEventListener('click',function(e){
	                e.stopPropagation();
	                //var allSiblings = document.querySelectorAll('.xselect');
	                obj.toggleClass(this,'active'); 

	            });

	            for(var i=0; i<oLis.length; i++){
	                oLis[i].addEventListener('click', function(){
	                    obj.val = this.innerHTML;
	                    if(oSpan.innerHTML == obj.val) return;
	                    oSpan.innerHTML = obj.val;
	                    //console.log(oSpan.parentNode);
	                    obj.removeClass(oSpan.parentNode,'active');
	                });
	            }
            });

            // console.log(oXSelect.forEach);

            // var oLis = oXSelect.querySelectorAll('li');
            // var oSpan = oXSelect.querySelector('span');


            //  //console.log(oSpan);
            // oXSelect.addEventListener('click',function(e){
            //     e.stopPropagation();
            //     //var allSiblings = document.querySelectorAll('.xselect');
            //     obj.toggleClass(this,'active'); 

            // });

            // for(var i=0; i<oLis.length; i++){
            //     oLis[i].addEventListener('click', function(){
            //         obj.val = this.innerHTML;
            //         if(oSpan.innerHTML == obj.val) return;
            //         oSpan.innerHTML = obj.val;
            //         obj.removeClass(oSpan.parentNode,'active');
            //     });
            // }

	        
	    },
		hasClass: function(obj, cls) {
            var obj_class = obj.className,//获取 class 内容.
              obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
              x = 0;
              for(x in obj_class_lst) {
                if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
                  return true;
                }
              }
              return false;
        },
        removeClass: function(obj, cls) {
        	console.log(this.hasClass(obj, cls))
            if (this.hasClass(obj, cls)) {
                var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
                  obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
                  removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
                  removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
                  obj.className = removed;//替换原来的 class.
            }
        },
        toggleClass: function(obj,cls){
            //console.log(this.hasClass(obj,cls));
            if(this.hasClass(obj,cls)){
                //console.log(1);
                this.removeClass(obj, cls);
            } else {
           // console.log(2);
                this.addClass(obj, cls);
            }
        },
        addClass: function(obj, cls) {
            if (!this.hasClass(obj, cls)) {
                obj.className += " " + cls;
            }
        },
        siblingElems: function(elem){
               	var nodes=[ ];
                var _elem=elem;
               	while((elem=elem.previousSibling)){
                      if(elem.nodeType==1){
                       		nodes.push(elem);
                      }
               	}
               	var elem=_elem;
              	while((elem=elem.nextSibling)){
                  	if(elem.nodeType==1){
                       	nodes.push(elem);
                  	}
               	}
        },
	}
    

    return DropDown;
})(window);