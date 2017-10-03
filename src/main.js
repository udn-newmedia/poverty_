// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Utils from 'udn-newmedia-utils'

import bg from './assets/bg.jpg'
import bg_mobile from './assets/bg_mobile.jpg'

import pic3_web from './assets/pic3.jpg'
import pic4_web from './assets/pic4.jpg'

import pic3_mobile from './assets/mobile/pic3.jpg'
import pic4_mobile from './assets/mobile/pic4.jpg'

import './style.css'

Vue.config.productionTip = false

var title = $('title').text()
var isMob = Utils.detectMob(10);
var platform = (isMob == true) ? 'Mob' : 'PC'

/* eslint-disable no-new */
var app = new Vue({
	el: '#app',
	mounted: function(){
		if(window.innerWidth < 1024){
			$('#back').prop('width', 375)
			$('#back').prop('height', 667)
		}
		else{
			$('#back').prop('width', 1280)
			$('#back').prop('height', 720)
		}
	// FB.XFBML.parse()
	},
	template: '<App/>',
	components: { App }
})

var progress = [null, null, null, null];
var movie_progress = 0;
var read_progress = 0;

function moviePlay(id){
	$('#movie-' + id).get(0).play();
	if(progress[id - 1] == null){
		progress[id - 1] = setInterval(function(){
			var curTime = $('#movie-' + id).get(0).currentTime;
			var temp = curTime / $('#movie-' + id).get(0).duration * 100;
			if(temp >= 0.6){
				$('.video-play[data-target="' + id + '"]').css('opacity', 0);
			}
			if(Math.floor(curTime/5) > movie_progress){
				movie_progress = Math.floor(curTime/5)
				ga("send", {
					"hitType": "event",
					"eventCategory": "movie play",
					"eventAction": "play",
					"eventLabel": "[" + platform + "] [" + title + "] [movie " + id + " play " + (movie_progress*5) + "]"
				});
			}
			
			$('#progress-bar-' + id).css('width', temp + '%')
		}, 600)
	}
}
	
function moviePause(id){
	$('#movie-' + id).get(0).pause();
	$('.video-play[data-target="' + id + '"]').css('opacity', 1);
	if(progress[id-1]){
		clearInterval(progress[id-1])
		progress[id-1] = null;
	}
}

function movieReplay(id){
	$('#movie-' + id).get(0).currentTime = 0;
	$('.progress-bar').css('width', 0);
	clearInterval(progress[id - 1])
	progress[id - 1] = null
	moviePlay(id)
}

function movieVolume(id){
	
	if($('#movie-' + id).get(0).muted == true){
		$('#movie-' + id).get(0).muted = false;
		$('.volume[data-target="' + id + '"]').removeClass('fa-volume-off').addClass('fa-volume-up')
		$('.volume-text[data-target="' + id + '"]').text('點按關聲音');
	}
	else{
		$('#movie-' + id).get(0).muted = true;
		$('.volume[data-target="' + id + '"]').removeClass('fa-volume-up').addClass('fa-volume-off')
		$('.volume-text[data-target="' + id + '"]').text('點按開聲音');
	}
}

$(document).ready(function(){
	var w = $(window).width()
	var h = $(window).height()

	var scroll_now
	var animation
	var fixbg1, fixbg2, fixbg3
	var cross1, cross2
	var chart, chart_flag = false
	var pic3, pic4
	var movie, movie1
	var counter
	var canvas, canvas2, canvas3
	var ctx, volume
	var ver = Utils.iOSVersion(10)


	$(window).resize(function(){
		if(w >= 768 && w <= 1024){
			if($(window).width()!=w)	window.location.href="./index.html";
		}
	});

	console.log(Utils.isFacebookApp())

	$('video').on('waiting', function(){
		var tar = $(this).data('target')
		$('.video-play[data-target="' + tar + '"]').css('opacity', 0);
		$('.fa-spinner[data-target="' + tar + '"]').css('opacity', 1)
		console.log('wait' + $(this).data('target'))
	})

	$('video').on('canplay', function(){
		var tar = $(this).data('target')
		$('.fa-spinner[data-target="' + tar + '"]').css('opacity', 0)
		$('.video-play[data-target="' + tar + '"]').css('opacity', 1);
		console.log('canplay' + $(this).data('target'))
	})

	$('video').on('ended', function(){
		var tar = $(this).data('target')
		if(progress[tar - 1]){
			clearInterval(progress[tar - 1]);
			progress[tar - 1] = null;
			$('#progress-bar-' + tar).css('width', 0)
		}
		$(this).get(0).currentTime = 0
		$('.video-play[data-target="' + tar + '"]').css('opacity', 1);
		ga("send", {
			"hitType": "event",
			"eventCategory": "movie end",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [movie " + tar + " end]"
		});
	})

	$('video').click(function(){
		var tar = $(this).data('target')
		if($(this).get(0).paused == true){
			moviePlay(tar);
			if($(this).get(0).muted == true){
				$(this).get(0).muted = false;
				$('.volume[data-target="' + tar + '"]').removeClass('fa-volume-off').addClass('fa-volume-up')
				$('.volume-text[data-target="' + tar + '"]').text('點按關聲音');
			}
		}
		else{
			$(this).get(0).pause();
			moviePause(tar);
		}
		ga("send", {
			"hitType": "event",
			"eventCategory": "movie click",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [movie " + tar + " click]"
		});
	});

	$('.replay').click(function(){
		var tar = $(this).data('target')
		movieReplay(tar)
		ga("send", {
			"hitType": "event",
			"eventCategory": "movie replay",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [movie " + tar + " replay]"
		});
	})

	$('.volume').click(function(){
		var tar = $(this).data('target');
		movieVolume(tar);
		ga("send", {
			"hitType": "event",
			"eventCategory": "movie volume",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [movie " + tar + " volume]"
		});
	});

	$('.volume-text').click(function(){
		var tar = $(this).data('target');
		movieVolume(tar);
		ga("send", {
			"hitType": "event",
			"eventCategory": "movie volume text",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [movie " + tar + " volume text]"
		});
	});

	$('a').click(function(){
        console.log('click')
        fbq('track', 'ViewContent');
		ga("send", {
			"hitType": "event",
			"eventCategory": "超連結點擊",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [" + $(this).attr('href') + "] [" + $(this).parent().attr('class') + "]"
		});
	})

	$('#nav-icon').click(function(){
		ga("send", {
			"hitType": "event",
			"eventCategory": "nav icon",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [nav icon]"
		});
		$(this).toggleClass('open')
		$('#hbutton-contain').toggleClass('open')
	})

	$('.hbutton').click(function(){
		if($(this).data('target') == 1){
			$('#nav-icon').toggleClass('open')
			$('#hbutton-contain').toggleClass('open')
			$('html, body').animate({scrollTop : $('#fixbg-1').offset().top}, 1000, function(){});
			ga("send", {
				"hitType": "event",
				"eventCategory": "hbutton click",
				"eventAction": "click",
				"eventLabel": "[" + platform + "] [" + title + "] [hbutton 1 click]"
			});
		}
		if($(this).data('target') == 2){
			$('#nav-icon').toggleClass('open')
			$('#hbutton-contain').toggleClass('open')
			$('html, body').animate({scrollTop : $('#fixbg-2').offset().top}, 1000, function(){});
			ga("send", {
				"hitType": "event",
				"eventCategory": "hbutton click",
				"eventAction": "click",
				"eventLabel": "[" + platform + "] [" + title + "] [hbutton 2 click]"
			});
		}
		if($(this).data('target') == 3){
			$('#nav-icon').toggleClass('open')
			$('#hbutton-contain').toggleClass('open')
			$('html, body').animate({scrollTop : $('#fixbg-3').offset().top}, 1000, function(){});
			ga("send", {
				"hitType": "event",
				"eventCategory": "hbutton click",
				"eventAction": "click",
				"eventLabel": "[" + platform + "] [" + title + "] [hbutton 3 click]"
			});
		}
		if($(this).data('target') == 4){
			$('#nav-icon').toggleClass('open')
			$('#hbutton-contain').toggleClass('open')
			ga("send", {
				"hitType": "event",
				"eventCategory": "超連結點擊",
				"eventAction": "click",
				"eventLabel": "[" + platform + "] [" + title + "] [light.html] [" + $(this).parent().attr('class') + "]"
			});
			window.open('./light.html')
		}
	})

	if(w < 1024){
		$('#back-bg').attr('src', bg_mobile)
		$('#movie-2').attr('src', './static/mobile.mp4?v=3')
		$('#movie-2').attr('poster', './static/mobile.jpg?v=3')
		$('#movie-2').prop('muted', true)
		if(Utils.isFacebookApp()){
			$('#title-contain').css('margin-bottom', '128px')
		}
		
		animation = bodymovin.loadAnimation({
			container: document.getElementById('chart'),
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: './static/mobile/data.json'
		})
		pic3 = new Image()
		pic3.src= pic3_mobile
		pic4 = new Image()
		pic4.src= pic4_mobile
	}
	else{
		$('#movie-2').attr('src', './static/web.mp4?v=3')
		$('#movie-2').attr('poster', './static/web.jpg?v=3')
		$('#movie-2').prop('controls', true)
		$('#back-bg').attr('src', bg)
		animation = bodymovin.loadAnimation({
			container: document.getElementById('chart'),
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: './static/data.json'
		})
		pic3 = new Image()
		pic3.src= pic3_web
		pic4 = new Image()
		pic4.src= pic4_web
	}
	canvas = document.getElementById('back');
	ctx = canvas.getContext('2d');

	$(window).on('scroll', function(){
		scroll_now = $(window).scrollTop();
		
		fixbg1 = $('#fixbg-1').offset().top
		fixbg2 = $('#fixbg-2').offset().top
		fixbg3 = $('#fixbg-3').offset().top
		chart = $('#chart-contain').offset().top
		cross1 = $('#cross-1').offset().top
		cross2 = $('#cross-2').offset().top
		movie = $('#movie-2').offset().top;		
		if(scroll_now >= movie - h/2 && scroll_now < movie + h/2){
			$('.video-contain').css('filter', 'brightness(1)')
			if(navigator.userAgent.match(/iPhone/i)){
				if(ver == true){
					moviePlay(2)
				}
			}
			else{
				moviePlay(2)
			}
		}
		else{
			$('.video-contain').css('filter', 'brightness(0.5)')
			moviePause(2)
		}

		if(scroll_now >= cross1 - (h + 200) && scroll_now < cross2 - h){
			
			$('#back-contain').css('opacity', 1)
			$('#back-contain').css('visibility', 'visible')
			$('#back-contain').css('background-color', '#000000')
			if(window.innerWidth < 1024){
				ctx.drawImage(pic3, 0, 0, 720, 1280, 0, 0, 375, 667)
			}
			else{
				ctx.drawImage(pic3, 0, 0, 1280, 720, 0, 0, 1280, 720)
			}
			$('#back-text').text('貨櫃屋裡滿是撿來的二手家具。')
			$('#back-text').css('opacity', 1)
		}
		else if(scroll_now >= cross2 - h && scroll_now < cross2 + h - 200){
			$('#back-contain').css('opacity', 1)
			$('#back-contain').css('visibility', 'visible')
			$('#back-contain').css('background-color', '#000000')
			$('#back-text').css('opacity', 1)
			var temp = (cross2 - scroll_now) / window.innerHeight.toFixed(2)
			$('#back-text').text('今年7月中改善後的貨櫃屋，四周鐵皮加裝了隔熱牆。')
			if(window.innerWidth < 1024){
				ctx.drawImage(pic4, 0, 0, 720, 1280, 0, 0, 375, 667)
				ctx.drawImage(pic3, 0, 0, 720, 1280*temp, 0, 0, 375, 667*temp)
			}
			else{
				ctx.drawImage(pic4, 0, 0, 1280, 720, 0, 0, 1280, 720)
				ctx.drawImage(pic3, 0, 0, 1280, 720*temp, 0, 0, 1280, 720*temp)
			}
		}
		else{
			$('#back-text').css('opacity', 0)
			$('#back-contain').css('opacity', 0)
			$('#back-contain').css('visibility', 'hidden')
			$('#back-contain').css('background-color', '')
		}

		if(scroll_now < fixbg1 - h){
			$('.hbutton').css('background-color', '')
		}
		else if(scroll_now >= fixbg1 - h && scroll_now < fixbg2 - h){
			$('.hbutton').css('background-color', '')
			$('.hbutton[data-target="1"]').css('background-color', '#FF4612')
		}
		else if(scroll_now >= fixbg2 - h && scroll_now < fixbg3 - h){
			$('.hbutton').css('background-color', '')
			$('.hbutton[data-target="2"]').css('background-color', '#FF4612')
		}
		else{
			$('.hbutton').css('background-color', '')
			$('.hbutton[data-target="3"]').css('background-color', '#FF4612')
		}
		
		if(scroll_now > chart - h && scroll_now < chart){
			if(!chart_flag){
				$('#chart').css('opacity', 1)
				animation.play()
				chart_flag = true
			}
		}
	})
})
