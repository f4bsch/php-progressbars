
	var _JSP_bs = []; // bar els
	var _JSP_ds = []; // digit els
	var _JSP_ss = []; // steps
	var _JSP_ws = []; // width
	var _JSP_dc = []; // digit cl changed

	function _JSP_s(id, value) // set
	{
		var p = (value / _JSP_ss[id]);
		if(_JSP_ds[id]) _JSP_ds[id].innerHTML = '' + Math.round( p * 100 ) + ' %';	
		_JSP_bs[id].style.width = '' + Math.round( p * _JSP_ws[id] ) + 'px';
		
		var half = (p >= 0.5);
		if(_JSP_ds[id] && _JSP_dc[id] != half) {
			var el = (half ? document.getElementById('_JSP_b' + id) : _JSP_bs[id]);
			_JSP_ds[id].style.color = el.style.backgroundColor;
			_JSP_dc[id] = half;
		}
	}
	
	function _JSP_i(id, value, steps, width)
	{
		_JSP_bs[id] = document.getElementById('_JSP_' + id);
		_JSP_ds[id] = document.getElementById('_JSP_d' + id);
		_JSP_dc[id] = false;
		_JSP_ss[id] = steps;
		_JSP_ws[id] = width;
		
		_JSP_s(id, value);
	}	
