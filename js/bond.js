var Bond = function Bond( items ){

	var BondItem = function BondItem($el, itemClass ){

		var $tmpItem = $el.find( '.' + itemClass );
		var realItem = function ( val ){
			var T = this;
			var isInput = $tmpItem.is('input');
//			console.log(val);
			var setAction = isInput?'val':'html';
			var getAction = isInput?'val':'text';
			if( val === undefined ) {
				var ret = $tmpItem[getAction]();
				ret =  isFinite(ret)? parseInt(ret):ret;
				return ret;
			} else if( $.isFunction(val) ){
				$tmpItem[setAction]( val() );
			} else if (typeof val != 'Object'){
				$tmpItem[setAction]( val );
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
					if( boundItems[i] !== undefined ) {
					boundItems[i](obj[i]);
					}
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