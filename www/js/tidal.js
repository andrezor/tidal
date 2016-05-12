<script type="text/javascript">
				 $(document).ready(function() {
					alert('App Loader Successful');
					$.support.cors=true;
					console.log("Working.");
					var lat = 50.8290;
					var lon = 0.8577;
					 $.getJSON("https://www.worldtides.info/api?extremes&lat=" + lat + "&lon=" + lon+ "&key=5a7e744f-bbb2-4027-a8bd-57077df0af8c",function(data){
						var k = data.extremes.length;
							for (var y=0; y<k; y++) {
								console.log("Type: " + JSON.stringify(data.extremes[y].type));
								$("#output").append("Date: "+ JSON.stringify(data.extremes[y].date) +" | Type:"+ JSON.stringify(data.extremes[y].type) +"<br/>");
							}
					 });
				 });
		 </script>		 