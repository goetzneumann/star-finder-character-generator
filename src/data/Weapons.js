//https://glasstopgames.com/sfrpg/rules/equipment/weapon-list.html
//one handed weapons
    //Unarmed Strike  	            -	-	    1d3 Bludgeoning	-	-	Archaic, Nonlethal
    //Club	                        0	-	    1d6 Bludgeoning	-	L	Analog, Archaic
    //Baton, Tactical 	            1	90	    1d4 Bludgeoning	-	L	Analog, Operative
    //Battleglove, Cestus	        1	100	    1d4 Bludgeoning	-	L	Analog
    //Knife, Survival 	            1	95	    1d4 Slashing	-	L	Analog, Operative
const meleeWaepons = [
  {name:'Unarmed Strike',handed:1,level:0, price:0, damage : {tc:1,dt:3, damageType:'Bludgeoning', critical:null},bulk:0.1,special:['Archaic', 'Nonlethal']},
  {name:'Club',handed:1,level:0, price:0, damage : {tc:1,dt:6, damageType:'Bludgeoning', critical:null},bulk:0.1,special:['Archaic', 'Analog']},
  {name:'Baton, Tactical ',handed:1,level:1, price:90, damage : {tc:1,dt:4, damageType:'Bludgeoning', critical:null},bulk:0.1,special:['Analog', 'Operative']},
  {name:'Battleglove, Cestus',handed:1,level:1, price:100, damage : {tc:1,dt:4, damageType:'Bludgeoning', critical:null},bulk:0.1,special:['Analog']},
  {name:'Knife, Survival',handed:1,level:1, price:95, damage : {tc:1,dt:4, damageType:'Slashing', critical:null},bulk:0.1,special:['Analog', 'Operative']},
]


//two handed weapons
    //Spear, Tactical	            1	375	    1d6 Piercing	-	1	Analog, Block, Thrown (20 ft.)
    //Staff, Battle	                1	80	    1d4 Bludgeoning	Knockdown	1	Analog, Block

//uncategorized
    //Hammer, Assault	            1	95	    1d6 Bludgeoning	-	1	Analog
    //Longsword	                    1	375	    1d8 Slashing	-	1	Analog
    //Starknife, Tactical     	    1	110	    1d4 Piercing	-	L	Analog, Thrown (20 ft.)
    //Taclash, Standard	            1	240	    1d4 Slashing	-	L	Analog, Disarm, Nonlethal, Reach, Trip

//advanced two handed weapons
    //Doshko, Tactical	            1	240	    1d12 Piercing   -	1	Analog, Unwieldy

//small arms
    //Flare Gun, Survival	        1	90	    1d3 Fire        30 ft.	 Burn 1d6	        1 flare	    1	L	Analog, Bright
    //Laser Pistol, Azimuth	        1	350	    1d4 Fire	    80 ft.	 Burn 1d4	        20 charges	1	L	-
    //Semi-Auto Pistol, Tactical	1	260	    1d6 Piercing    30 ft.	     -	            9 rounds	1	L	Analog
    //Pulsecaster Pistol	        1	250	    1d4 Electricity	30 ft.	     -	            20 charges	1	L	Nonlethal
    //Needler Pistol	            1	105	    1d4 Piercing	30 ft.	Injection DC +2	    6 darts	    1	L	Analog, Injection

//long arms
    //Laser Rifle, Azimuth	        1	425	    1d8 Fire	   120 ft.	   Burn 1d6	     20 charges	1	1	-
    //Hunting Rifle	                1	240	    1d8 Piercing	90 ft.        -	         6 rounds	1	1	Analog
    //Scattergun, Utility	        1	235	    1d4 Piercing	15 ft.	      -	         4 shells	1	1	Analog, Blast
    //Pulsecaster Rifle	            1	100	    1d6 Electricity	50 ft.	      -	         40 charges	2	1	Nonlethal
    //Needler Rifle	                1	110	    1d6 Piercing	60 ft.	Injection DC +2	 12 darts	1	1	Analog, Injection

//heavy weapons
    //Artillery Laser, Azimuth	    1	425	    1d10 Fire	   120 ft.	Burn 1d6	20 charges	2	3	Penetrating
    //Reaction Cannon, Light  	    1	250	    1d10 Piercing   90 ft.      -	    6 rounds	1	3	Penetrating
    //NIL Grenade Launcher, Merc	1	280	    Grenade	        60 ft.  	-   	6 grenades	1	2	Analog

//Grenades
    //Frag Grenade I	            1	35	    20 ft.	Drawn	L	Explode (1d6 Piercing, 15 ft.)
    //Shock Grenade I	            1	130	    20 ft.	Drawn	L	Explode (1d8 Electric, 15 ft.)
    //Smoke Grenade	                1	40  	20 ft.	Drawn	L	Explode (Smoke Cloud 1 minute, 20 ft.)
    //Stickybomb Grenade I	        1	170	    20 ft.	Drawn	L	Explode (Entangled 2d4 rounds, 10 ft.)

//Special
    //Bow	                        1	255	    1d6 Piercing	60 ft.	    -	    1 arrows	1	1	Quick Reload
    //Carbonedge Shuriken (10)	    1	85	    1d4 Piercing	10 ft.	Bleed 1d4   	-	    -	-	Quick Reload, Thrown (10 ft.)

//Amunition
    //Arrows	                    1	50	    20	            L	        -
    //Battery	                    1	60	    20	            -	        -
    //Darts	                        1	20	    25          	L	        -
    //Flare	                        1	5	    1	            -	        -
    //Rounds, Long Arm And Sniper	1	75	    25	            L	        -
    //Rounds, Small Arm	            1	40	    30	            L	        -
    //Scattergun Shells       	    1	55	    25          	L	        -
