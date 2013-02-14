var Bond = function Bond( items ){

	var BondItem = function BondItem($el, itemClass ){

		var $tmpItem = $el.find( '.' + itemClass );
		var realItem = function ( val ){
			var T = this;
//			console.log(val);
			if( val === undefined ) {
				var ret = $tmpItem.text();
				ret =  isFinite(ret)? parseInt(ret):ret;
				return ret;
			} else if( $.isFunction(val) ){
				$tmpItem.html( val() );
			} else if (typeof val != 'Object'){
				$tmpItem.html( val );
			}
			return this;

		};

		return realItem;
	};

	var Bound = function Bound ( $el ){
		var boundItems = [];

		var realBound = function realBound(obj){
			
			if(obj === undefined){
				var retObj = {};
				for(var i in boundItems){
					retObj[i] = boundItems[i]();
				}
				return retObj;
			} else {
				for(var i in obj){
					boundItems[i](obj[i]);
				}
			}

			return this;
		};

		for( var i in items ) {
			boundItems[items[i]] = new BondItem($el, items[i] );
			realBound[items[i]] = boundItems[items[i]];
		}

		return realBound;

	};

	return Bound;

};