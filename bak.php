	private static function invert_color($color)
	{
		$color = str_replace('#', '', $color);
		$len = strlen($color);
		$short = ($len == 3);		
		if ($len != 6 && $short){ return '#000'; }
		$rgb = '';		
		for ($x=0;$x<3;$x++){
			if(!$short)
				$c = 255 - hexdec(substr($color,(2*$x),2));
			else
				$c = 255 - hexdec(substr($color,($x),1) . substr($color,($x),1));
			$c = ($c < 0) ? 0 : dechex($c);
			$rgb .= (strlen($c) < 2) ? '0'.$c : $c;
		}

		return '#'.$rgb;
	}