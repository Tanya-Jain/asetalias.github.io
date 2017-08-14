/** Site Description **/
var logoUrl = "";
var siteTitle = "";
var siteAbout = "";

var logoDarkLink = "images/logo-dark.png";
var logoLightLink = "images/logo-light.png";
/** Intro Section **/
var siteAboutHistory = "";
var joinNowBtnLink = "";


var currentDate = new Date();

/** FlashBox **/
var flashbox;

/** Alumni Section **/
var alumniDescription = "";

/** Array Definitions**/
var services1 = [];
var services2 = [];
var events = [];
var webinars = [];
var openSource = [];
var eventsP = [];
var team = [];
<<<<<<< HEAD
var pics = [];
var resource = [];

/** Services List **/
services1[0] = "Stand out of crowd and learn unique skills from people already working in the industry!";
services1[1] = "Find like minded Delhi/NCR Tech Communities.";
services1[2] = "Find mentors for GSoC";
services1[3] = "Learn Linux, Android, Networking, etc. There is no limit on how much and what you can learn!";
services2[0] = "Chance to find Interships under our Alumni.";
services2[1] = "ALiAS welcomes each and every student of amity irrespective of their department.";
services2[2] = "Already know something? Teach it to others! That's how we work!";
/** End Services **/

/** Events List
	title: Event Title
	cta: Link url for Call to Action Button
	ctaText: Call to Action Button Text
	cta2: Second Link url for Call to Action Button
	cta2Text: Call to Action Button Text
	description: Event Description. Can Contain HTML Tags
	date: Event Date
	startTime: Event Start Time
	endTime: Event End Time
	location: Event Location
	eventOD: 0 for NO, 1 for YES. The text and respective classes are automatically added by the script

	events[0] = {title: "", cta: "", ctaText: "",cta2: "", cta2Text: "", description: "", date: "", startTime: "", endTime: "", location: "", eventOD: 0};

**/
events[0] = {title: "Study Group: Web Designing", bg: "images/im.JPG", cta: "https://docs.google.com/forms/d/e/1FAIpQLScaB0SGVp31QzY4Pg6Mcj0sr2R7JqYGgVMbnrAyivCSOKD4Dg/viewform", ctaText: "Register", cta2: "https://drive.google.com/open?id=0B-SmzjWLoGhCeFdBemVJWDREZlk", cta2Text: "Study Material", description: "Learn Web Designing {HTML, CSS, JQuery} from scratch in these on going Study Group Sessions and start contributing to open source projects.", date: "On Going", startTime: "Tentative", endTime: "Tentative", location: "Announced on Group", eventOD: 0, cta2enable:0 };

/** End Events List **/

/** Webinars List  **/

webinars[0] = {title: "Introduction to Linux", bg: "images/im.JPG", cta: "https://www.youtube.com/watch?v=CTO-8BnzS_s", ctaText: "Watch Now!", description: "<strong>Topics covered:</strong> <br/>Basics of Linux and its terminologies- command lines, principles, every 'Must Know' thing about Linux.<br/><strong>Speaker:</strong> <br/><strong>Anuvrat Parashar:<strong> <a href = \"http://anuvrat.in/\">http://anuvrat.in/</a> ", date: "3 Jan '17", startTime: "10:00 PM ", endTime: "11:00 PM ", location: "YouTube", eventOD: 0};
webinars[1] = {title: "Introduction to Command Line Interface", bg: "images/im.JPG", cta: "https://www.youtube.com/watch?v=gmi_YM_N2L4", ctaText: "Watch Now!", description: "<strong>Topics covered:</strong> <br/>Basics of using Command Line Interface in Linux, especially Bash and principles to get started with Linux<br/><strong>Speaker:</strong> <br/><strong>Rohit Goyal:<strong> <a href = \"https://about.me/rohitgoyal18\">about.me/rohit</a> ", date: "13 Jan '17", startTime: "10:00 PM ", endTime: "11:00 PM ", location: "YouTube", eventOD: 0};
webinars[2]= {title: "Open Source Softwares", bg: "images/im.JPG", cta: "https://www.youtube.com/watch?v=JcYABQrAkaU", ctaText: "Watch Now!", description: "<strong>Topics covered:</strong> <br/>A live interactive session on Open Source, Open Source Software and its culture.<br/><strong>Speakers:</strong><br/><strong>Amit Kumar:<strong> <a href = \"http://iamit.in\">http://iamit.in</a> <br/><strong>Garvit Garg:<strong> <a href = \"http://garvitdelhi.blogspot.in\">http://garvitdelhi.blogspot.in</a> <br/><stong>Sanyam Khurana:</strong> <a href=\"http://www.sanyamkhurana.com\">sanyamkhurana.com</a>", date: "17 Jan '17", startTime: "10:00 PM ", endTime: "10:45 PM ", location: "YouTube", eventOD: 0};
webinars[3] = {title: "Github Tutorial 101", bg: "images/im.JPG", cta: "https://www.youtube.com/watch?v=i6vKEo12KfE&t=1315s", ctaText: "Watch Now!", description: "<strong>Topics covered:</strong> <br/>Brief insight about GitHub and its Workflow. Know about GIT downloads and its machine config @  : https://desktop.github.com/, https://github.com<br/><strong>Speaker:</strong> <br/><strong>Aniket Maithani:<strong> <a href = \"http://aniketmaithani.net/\">http://aniketmaithani.net/</a> ", date: "3 Jan '17", startTime: "10:00 PM ", endTime: "11:00 PM ", location: "YouTube", eventOD: 0};

/** Picture Box
	url: Link of the cover photo on google photos (For perfect size)
	text: Name of the event
	date: Date of the event
	cta: call to action (Link of the photos album) 
	pics[]= {url:"", text:"", date:"", cta:""};
**/

/** Picture Box List  **/
pics[0]= {url:"https://lh3.googleusercontent.com/ToOSptmfFXY6qEXRlK7wgtUxBMYEjnt39pSBr_AxVXjyPPmpDa3pnnjdjAxQM3CDAk79GJrC1c0Y3CFTs9a8tIbEN9X-SGMywTZ7R001aOFwak9BzbC-dTb28oU3TrzWf2a9CynzbiZ0nhM4n4jqlw4IUWVLdLDKvayecAqElDxoON-hX-858oe6GjIF6QI4K-h7ETLiMi_SazzlMqoLuh0DiGo7LKFR1T2znC8Msf8GHELrqUZl3gNb_K54Ri9NYBl33S23Fc_4xMCVMBB-mogkCgTkt1qIcMaqg5e-YF-1O-lPLNSkC9qveEApcwzjQdXQflUVhHTTitfRLH0X8DL0CC2o7MwS36ZEismjU5gIey7rntdrrf2K3LaTXv_Fdh84Zv73SMEStmB7AEQlemd0mOh0Jo7nYHEE8bp-9npuUVtk3USt6CxIQDGBAWuDlEn6Qcbnqf7t4EWEyKK7wXv8zcJ9mTcp7b-JDYkTE17XQ8BLSFG1h_dYKLzZBa5MPhiwUTW3UdL_BL0voEXnwPhe-jNwYFPUbtE2MRZAMaZ5Gx94nhBwXID7obRaG0M3btRHkhCm-lrA0qmkRP3d_dpjtPDSDiHje_R5mBP4LQpBwiXv=s167-p-k-no", text:"Women's Day Event", date:"March 9' 2017", cta:"https://goo.gl/photos/sTgVqSFSJxDZGvH77"};
pics[1]= {url:"https://lh3.googleusercontent.com/2Ez1kAfDIHsmPHSwTaUj8kNFyqyJTb2ZXY8UWdaUsAyGnXVRAiNNOXmiRl1-um5ro1-d2v9MGzZIktffAZcs7-EPJ5j8iHD5vsq0qGVppppSUhcQBiH2q2GDvjXV8fXMsODTw0A-y3COGqa4n8JYjDbAdGupiBWe9IOC7-aMhK71Sw8Ol6jdPEdZ2qadLJ6nyq0x-WMXGSS-b9G_I5nwohu_fLq1Kn0-IYaEV0LFOtP70kIMmTXtmSbVvRCEXX7MVTkTBnYM70DUDAwy0_wrO6i_LqjgqvasDDh1WrXJaWbecLu1XEk489dmHCAH5vaphK9FPrF_vpDuKyBcN4fmKjrYZwBiJOQllgs5SyvWCQugxs5SnDR7F2ycAg8ETqIh2_K_4lH07krqAYLzDuq67m5CTVPa1HnUqbnqeDn-S1shYXpjnawW8WPUhCMZtrL3Tx4uvjmC_pGy2OHYqlsfltYCHQ0RDZzQdRVQ1yaZnkdPsNGCKMBjfiPAIGn3o1nBtQsuu6IllQwwlV57jlpkvg30nb7l0M767yTU2sradqD7Q1VEN0_gfD2xY3p6eYZTGw0CBpv0nRTNCxzmUctjFaaYJ45SQfEcZqDJWWGikPHp-70b=s190-p-k-no", text:"Ethical Hacking", date:"March 2' 2017", cta:"https://goo.gl/photos/uoBWC4foibRyzxd58"};
pics[2]= {url:"https://lh3.googleusercontent.com/JY1Xlzfyzsc8rhWDb8pFfrCTyJtdqkxMGqnX0xJfagYYrFlHRwrwgGjV_4oiLs4MQlHe21nhovTEixP3OjbIm__xTSAPpHoYBsR3K_WTrsoTpyjhsO0OOiRwPZj-Eec5cwW63e5NM28D4OPjvg7L-tb4uEYhxnsNgisABx0GTcDKgpIdYkmtUThjXP33NlqVYaqDmrqfdSYyTm_lItDu97ue4gtb8pLSVkWySFMlFKXACp8ByGaTkLfucExEaQbPsO99gbQ6nSVgw8Tlv5slRfxxd7giqjyJldYHS_3pWcpl68UeuW7CqYE--8Jl9EK8ku0OwBlXXpHMAGscg2nki6rfjV1V8IK22vTkOGfki3_mE-DigkyhePw5bQzawbUyqEBy0sZzv6obdN1MSiYay1tKJOTKqUnZYqxwtZWcPwLIIJT1o_Lk92_49kKXLbFTJ6q29dWlXDwOqNOdmL-Na2D2IPeaneCxZy-K6EQA0JfvysLMvddJLdRBi7jgi0YydvKwDJFkiJ7TB3ZiQaW4ZrHCgKbuqkmKDVv57CJytqkoZb2xWaB5knW7gAxSZuQ9SHcAgpUyokhTvL_HPJD5VfeBDLWTzrzaLLIoJ_jPienqvGng=s170-p-k-no", text:"Amity Youth Fest Meetup", date:"February 18' 2017", cta:"https://goo.gl/photos/HVBzRy8Jw1fs7Yyc7"};
pics[3]= {url:"https://lh3.googleusercontent.com/qu04uXsdaq9jBzRPzzqZRStGZt42KbjTjJGaJdmoeBPq-AfoplY-grfZljZY984hAr7pNd3YC2Kr8fZfIO9_aBGEgr5HyZYNK1lPHNTtvRzfGONL0ko8Nk8eEq11cYTm1CJ3IxrnlQXonu2CQGiJO7ZdhLW1vscfMuur1C4S6SpUPH6hQuWV0zE-jrpcOHb3lulKPZjAkj5QofUD0KkT5-IT5iBg7qJem5AlZTE1TfR5QUGhsabt8-9j7Kb40tl6TsObzk6X3OsQ72Pph_J8sXkz75AF2HnIeHrRb655QT3A--lMF5CmxKaGxsrTk2ELLDPBZPLQFl7HiVZi6qi8j6rYlDRRbEfmrNbj_Bp-bd3lNG8RFhLgURIUS_wuQfUNyguMfQ52ru19c27alcwD4h04p0iUdVMc7Ykq66ngheBUS9uV-AWwdm2Fuk9u3J3s5D0pa_tQh1cj_YsEdT9K7l8ln6NsnB2nnEtBQ8kkYZMtVBHs5B-pp30-7AibFxhj4B8pozmb5uhE4BI2l6Y0y9W6gQIaomJYCyGQRday8jKt0nUD7wQf70HszrenSku9sQI2QwCCv4YZOfp8T8DGXynyNu491nZR2Kh3GuhizWdE0--5=s169-p-k-no", text:"Operating Systems", date:"February 7' 2017", cta:"https://goo.gl/photos/9D8csT4v9RsnrVzm7"};

/** Resources Box List
	cta: Call to action: Link to Document
	url: Link to picture displayed
	text: text to appear at mouse hover.
**/
resource[0]={cta:"https://docs.google.com/document/d/1s3RWKEemXNnCOPb_YyEMFIjC5C6R8R8K2gxMXRQyG7U/edit?usp=sharing",url:"images/Resources/OpnSrcGrps.jpg", text:"Links to Opensource Communities in Delhi/NCR."};
resource[1]={cta:"https://docs.google.com/document/d/13h5MoQZv4KgnLjkeDiRHjaAZRF-VaUpy-ZN4EltIwiA/edit?usp=sharing",url:"images/Resources/StudyMaterial.jpg", text:"Links to helpful Study Material & Resources."};
resource[2]={cta:"https://docs.google.com/document/d/1BVU3XOpvL8Gb1Px1VlI_NU018Hoj06aOfp69_NgERjo/edit?usp=sharing",url:"images/Resources/RecCompt.png", text:"Links to events recommended for participation."};

/** Team List
	team[0] = {name:"Test Name 1", designation: "Events Head", ppicUrl: "images/alumni/1.jpg"};
**/
team[0] = {name:"Shivam Rajput", designation: "", ppicUrl: "images/team/shivam.jpg"};
team[1] = {name:"Ashish Dahiya", designation: "", ppicUrl: "images/team/ashish.jpg"};
team[2] = {name:"Tanya Jain", designation: "", ppicUrl: "images/team/tanya.jpg"};
team[4] = {name:"Ayush Agarwal", designation: "", ppicUrl: "images/team/ayush.jpg"};
team[5] = {name:"Parth Sharma", designation: "", ppicUrl: "images/team/parth.jpg"};
team[6] = {name:"Manas Kashyap", designation:"", ppicUrl: "images/team/manas.jpg"};
team[7] = {name:"Animesh Verma", designation: "", ppicUrl: "images/team/animesh.jpg"};

/** End Team List **/
=======
var contactLinks = [];
var communitiesDetailed = [];
>>>>>>> 79d3a8b15e7b7b2d2e8550d5faf3079c7f902412

/** Containers **/
var logoContainer = $(".logo");
var siteAboutContainer = $(".siteAboutContainer");
var siteAboutHistoryContainer = $(".siteAboutHistory .description");
var joinNowBtnLinkContainer = $(".joinNowBtnLink");
var siteServicesListContainer1 = $(".servicesList-1");
var siteServicesListContainer2 = $(".servicesList-2");
var eventsListContainer = $("#eventsListContainer");
var webinarsListContainer = $("#webinarsListContainer");
var alumniDescriptionContainer = $(".alumniDescription p");
var openSourceContainer = $("#openSourceListContainer");
var eventsPListContainer = $("#eventsParticipateListContainer");	
var teamListContainer = $(".teamList");
<<<<<<< HEAD
var PastEventPics = $("#pastEventPicsContainer");
var RankersList = $("#RankersListContainer");
var resourceList = $("#resourceListContainer");
/** End Containers **/

/** Load Data **/
document.title = siteTitle;			//Update Site Title
coverLogoContainer.attr("src",logoUrl);	//Update Logo on Cover page
siteMottoContainer.html(siteMotto);
siteAboutContainer.html(siteAbout);	//Update Site About

siteAboutHistoryContainer.html(siteAboutHistory);
joinNowBtnLinkContainer.attr("href",joinNowBtnLink);

/** Generate Services **/
for(var x in services1){
	var html = '<li class="fa"><span>'+services1[x]+'</span></li>';
	siteServicesListContainer1.append(html);
}
for(var x in services2){
	var html = '<li class="fa"><span>'+services2[x]+'</span></li>';
	siteServicesListContainer2.append(html);
}

/** Generate Event Boxes **/
for (var x in events){
		var html = '<div class="col-lg-3 eventBox col-centered text-center"><div class="row eventTitle"><div class="col-lg-12 img"><img src="'+events[x].bg+'"></div><div class="col-lg-12 text-center h"><h2>'+events[x].title+'</h2></div></div>';
		if(events[x].cta2enable){
		html += '<div class="row eventInfo"><div class="col-xs-7 eventDesc"><div class="row eventDescInfo"><div class="col-lg-12"><p style="height: 250px" class="eventDescInfoContainer">'+events[x].description+'</p></div></div></div>';
		}else{
		html += '<div class="row eventInfo"><div class="col-xs-7 eventDesc"><div class="row eventDescInfo"><div class="col-lg-12"><p style="height: 210px" class="eventDescInfoContainer">'+events[x].description+'</p></div></div></div>'};
		html += '<div class="col-xs-5 eventTiming text-left"><div class="date"><i class="fa fa-calendar"></i> <span><strong>'+events[x].date+'</strong></span></div><div class="startTimimg"><i class="fa fa-clock-o"></i> <span><strong>'+events[x].startTime+'</strong></span></div><div class="endTimimg"><i class="fa fa-clock-o"></i> <span><strong>'+events[x].endTime+'</strong></span></div><div class="eventLocation"><i class="fa fa-map-marker"></i> <span><strong>'+events[x].location+'</strong></span></div><div class="eventOD"><strong>OD</strong> <span class="';
		html += (events[x].eventOD)?"text-success":"text-danger";
		html += '">';
		html += (events[x].eventOD)?"Yes":"No";
		html += '</span></div></div></div>';
		if(events[x].cta2enable){
		html +='<div class="row eventCTA"><div class="col-lg-12 text-center"><a href="'+events[x].cta+'" target="_blank"><button>'+events[x].ctaText+'</div></div></div>';
		}else{
			html+='<div class="row eventCTA"><div class="col-lg-12 text-center"><a href="'+events[x].cta+'" target="_blank"><button>'+events[x].ctaText+'</div></div><div class="row eventCTA"><div class="col-lg-12 text-center"><a href="'+events[x].cta2+'" target="_blank"><button>'+events[x].cta2Text+'</div></div></div>';
		}
		eventsListContainer.append(html);
		$(".eventTitle").css("background-image","'events[x].bg'")
}

/** Generate Webinar Boxes */
for (var x in webinars){
		var html = '<div class="col-lg-3 eventBox col-centered text-center"><div class="row eventTitle"><div class="col-lg-12 img"><img src="'+webinars[x].bg+'"></div><div class="col-lg-12 text-center h"><h2>'+webinars[x].title+'</h2></div></div><div class="row eventInfo"><div class="col-xs-7 eventDesc"><div class="row eventDescInfo"><div class="col-lg-12"><p style="height: 260px" class="eventDescInfoContainer">'+webinars[x].description+'</p></div></div></div><div class="col-xs-5 eventTiming text-left"><div class="date"><i class="fa fa-calendar"></i> <span>'+webinars[x].date+'</span></div><div class="startTimimg"><i class="fa fa-clock-o"></i> <span>'+webinars[x].startTime+'</span></div><div class="endTimimg"><i class="fa fa-clock-o"></i> <span>'+webinars[x].endTime+'</span></div><div class="eventLocation"><i class="fa fa-map-marker"></i> <span>'+webinars[x].location+'</span></div><div class="eventOD"><strong>OD</strong> <span class="';
		html += (webinars[x].eventOD)?"text-success":"text-danger";
		html += '">';
		html += (webinars[x].eventOD)?"Yes":"No";
		html += '</span></div></div></div>';
		html +='<div class="row eventCTA"><div class="col-lg-12"><a href="'+webinars[x].cta+'"><button>'+webinars[x].ctaText+'</button></a></div></div></div>';
		webinarsListContainer.append(html);
}
$( ".nextBtn" ).click(function(e) {
    goRight();
});
$( ".backBtn" ).click(function(e) {
    goLeft();
});

/** Generate Picture Boxes */
for (var x in pics){
		var html = '<div class="picsBox col-centered"><div class="row"><a href='+pics[x].cta+'><div class="coverpics"><img src="'+pics[x].url+'"></div></div><div class="row"><div class="picsText">'+pics[x].text+'</div></div><div class="row"><div class="picsDate">'+pics[x].date+'</div></div></a></div>';
		PastEventPics.append(html);
}

/** Generate Rankers Boxes**/
{
		var html = '<div class="col-xs-12 col-center"><div class="row"><div id="rankBox1"><div class="rankerPhotoContainer horizon-center box-shadow"><img src="'+rankers.ppicUrl1+'"/></div><div class="rankerText"><strong>'+rankers.name1+'</strong></div><div>'+rankers.rank1+'</div></div><div  id="rankBox2"><div class="rankerPhotoContainer horizon-center box-shadow"><img src="'+rankers.ppicUrl2+'"/></div><div class="rankerText"><strong>'+rankers.name2+'</strong></div><div>'+rankers.rank2+'</div></div><div id="rankBox3"><div class="rankerPhotoContainer horizon-center box-shadow"><img src="'+rankers.ppicUrl3+'"/></div><div class="rankerText"><strong>'+rankers.name3+'</strong></div><div>'+rankers.rank3+'</div></div></div></div>';
		RankersList.append(html);
}

/**Generate Resources Box**/
for (var x in resource){
	var html= '<div class="resourceBox col-centered"><div class="row"><a href='+resource[x].cta+'><div class="resourcePics picHover"><img src="'+resource[x].url+'"><p class="resourceText">'+resource[x].text+'</p></div></div>';
	resourceList.append(html);
}
function goRight(){ // inner stuff slides left
    var initalLeftMargin = $( "#webinarsListContainer" ).css('margin-left').replace("px", "")*1;
    var newLeftMargin = (initalLeftMargin - 385); // extra 2 for border
    $( "#webinarsListContainer" ).animate({marginLeft: newLeftMargin}, 400);
}
function goLeft(){ // inner stuff slides right
    var initalLeftMargin = $( "#webinarsListContainer" ).css('margin-left').replace("px", "")*1;
    var newLeftMargin = (initalLeftMargin + 382); // extra 2 for border
    $( "#webinarsListContainer" ).animate({marginLeft: newLeftMargin}, 400);
}
/** Load Alumni **/
alumniDescriptionContainer.html(alumniDescription);

/** Load Team List **/
for (var x in team){
	var html = '<div class="col-lg-2 teamBox col-centered"><div class="TeamGrad">';
	html+='<div class="teamPhotoContainer horizon-center"><img src="'+team[x].ppicUrl+'" alt="'+team[x].name+'" title="'+team[x].name+'"/></div></div>';
	html+='<div class="row"><div class="TeamBG"><div class="col-lg-12 text-center"><div class="teamInfoContainer">';
	html+='<strong><div class="teamName">'+team[x].name+'</div></strong>';
	html+='<div class="teamDesignation">'+team[x].designation+'</div>';
	html+='</div></div></div></div></div>';
	teamListContainer.append(html);
}
/** Do Not Change! Still in BETA **/
var siteThemeClassName ="blue"; //blue, green, red, yellow (Use Blue for now)
$(".theme-bg").addClass(siteThemeClassName);
$(".theme-btn-primary").addClass(siteThemeClassName);
$(".preloader").delay(1000).fadeOut(2000);
=======
var contactLinksContainer = $(".contactLinksContainer");
/**Flashbox Containers */
var flashboxContainer = $(".flashbox");
var flashboxContentContainer = $(".flashBox-content");
var flashboxCloseBtn = $(".flashbox .closeBtn");
/** End Containers **/
>>>>>>> 79d3a8b15e7b7b2d2e8550d5faf3079c7f902412
