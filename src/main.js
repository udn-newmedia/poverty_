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
var isMob = Utils.detectMob();
var platform = (isMob == true) ? 'Mob' : 'PC'

/* eslint-disable no-new */
new Vue({
	el: '#app',
	mounted: function(){
		if(window.innerWidth <= 1024){
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

$(document).ready(function(){
	var w = $(window).width()
	var h = $(window).height()

	var scroll_now
	var animation
	var fixbg1, fixbg2, fixbg3
	var cross1, cross2
	var chart, chart_flag = false
	var pic3, pic4
	var movie1
	var counter
	var video = document.getElementById("video");
	var canvas, canvas2, canvas3
	var ctx, volume, video_state
	var ver = Utils.iOSVersion();

	canvas2 = document.getElementById('video-state');
	video_state = canvas2.getContext('2d');
	video_state.lineWidth = 3
	canvas3 = document.getElementById('volume');
	volume = canvas3.getContext('2d');
	volume.lineWidth = 3
	volume.beginPath();
	volume.arc(20, 20,17.5, 0, 2 * Math.PI);
	volume.strokeStyle = '#FFFFFF';
	volume.stroke();

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
    
    $('.line-share').click(function(e){
		ga("send", {
			"hitType": "event",
			"eventCategory": "Line Share",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [line share]"
		});
		if(detectmob()){
			//手機
			window.location.href="//line.me/R/msg/text/?20年來，台灣落入近貧的兒童增加一倍...%0D%0A%0D%0A8歲的小女孩住在貨櫃屋裡，家徒四壁；10歲的小男孩則住在破舊髒亂的環境裡，冬天沒熱水澡可洗。他們都是台灣的下一代，卻落在社會救助的安全網外，成為社會遺忘的孩子。%0D%0A%0D%0A台灣近幾年關注高齡化問題，擔心步入日本後塵產生大量「下流老人」，但根據衛福部統計，12歲以下的貧窮兒童人數已是下流老人的3倍，誰來幫孩子翻轉命運？%0D%0A%0D%0A" + window.location.href;
		}else{
			window.open("https://lineit.line.me/share/ui?url="+window.location.href);
		}
	});

	$('#video').on('ended', function(){
		clearInterval(counter)
		counter = null
		$('#video-control').removeClass('fa-play')
		$('#video-control').addClass('fa-repeat')
	})

	$('#video-volume').click(function(){
		ga("send", {
			"hitType": "event",
			"eventCategory": "video volume",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [video volume]"
		});
		if($('#volume-img').attr('src') == './static/on.svg'){
			$('#volume-img').attr('src', './static/off.svg')
			video.muted = true
		}
		else{
			$('#volume-img').attr('src', './static/on.svg')
			video.muted = false
		}
	})

	$('#video-control').click(function(){
		ga("send", {
			"hitType": "event",
			"eventCategory": "video replay",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [video control]"
		});
		if(video.paused == true){
			video.play()
		}
		else{
			video.currentTime = 0;
		}
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
			$(this).toggleClass('open')
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
			$(this).toggleClass('open')
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
			$(this).toggleClass('open')
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
			$(this).toggleClass('open')
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

	if(w <= 1024){
		$('#back-bg').attr('src', bg_mobile)
		$('#video').attr('src', './static/mobile.mp4')
		$('#video').attr('poster', './static/mobile.jpg')
		$('#video').prop('muted', true)
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
		$('#video').attr('src', './static/web.mp4')
		$('#video').attr('poster', './static/web.jpg')
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
		movie1 = $('#movie-1').offset().top;
		$('#cover').css('height', h+'px')

		if(scroll_now >= movie1 - (h + 200) && scroll_now < movie1){
			if(ver[0] >= 10 || w > 1024){
				if($('#movie-1').get(0).paused){
					$('#movie-1').get(0).play()
				}
			}
		}
		else{
			$('#movie-1').get(0).pause()
		}

		if(scroll_now >= h * 3/4 && scroll_now < h * 2.25){
			$('#back-contain').css('opacity', 1)
			$('#back-contain').css('visibility', 'visible')
			$('#back-contain').css('background-color', '#000000')
			$('#video-state-contain').css('opacity', 1)
			if(counter == null){
				if(ver[0] >= 10 || w > 1024){

					video.play()
					if(video.paused == false){
						$('#video-control').removeClass('fa-play')
						$('#video-control').addClass('fa-repeat')
					}
					counter = setInterval(function(){
						// console.log('video2')
						if(w <= 1024){
							ctx.clearRect(0, 0, 375, 667)
							ctx.drawImage(video, 0, 0, 374, 666, 0, 0, 375, 667)
						}
						else{
							ctx.clearRect(0, 0, 1280, 720)
							ctx.drawImage(video, 0, 0, 1280, 720, 0, 0, 1280, 720)
						}
						var progress = video.currentTime / video.duration
						// console.log(progress)
						video_state.clearRect(0, 0, 40, 40)
						video_state.beginPath();
						video_state.arc(20, 20,17.5, 0, 2 * Math.PI);
						video_state.strokeStyle = '#FFFFFF';
						video_state.stroke();
						video_state.beginPath();
						video_state.arc(20,20,17.5,-0.5 * Math.PI, (2 * progress - 0.5) * Math.PI);
						video_state.strokeStyle = "#FF4612";
						video_state.stroke();
					}, 33)
				}
				else{
					ctx.drawImage(video, 0, 0, 1280, 720, 0, 0, 1280, 720)
				}
			}
			console.log(5)
		}
		else if(scroll_now >= cross1 - (h + 200) && scroll_now < cross2 - h){
			
			$('#back-contain').css('opacity', 1)
			$('#back-contain').css('visibility', 'visible')
			$('#back-contain').css('background-color', '#000000')
			if(window.innerWidth <= 1024){
				ctx.drawImage(pic3, 0, 0, 720, 1280, 0, 0, 375, 667)
			}
			else{
				ctx.drawImage(pic3, 0, 0, 1280, 720, 0, 0, 1280, 720)
			}
			$('#back-text').text('貨櫃屋裡滿是撿來的二手家具。')
			$('#back-text').css('opacity', 1)
		}
		else if(scroll_now >= cross2 - h && scroll_now < cross2 + h){
			$('#back-contain').css('opacity', 1)
			$('#back-contain').css('visibility', 'visible')
			$('#back-contain').css('background-color', '#000000')
			$('#back-text').css('opacity', 1)
			var temp = (cross2 - scroll_now) / window.innerHeight.toFixed(2)
			$('#back-text').text('今年7月中改善後的貨櫃屋，四周鐵皮加裝了隔熱牆。')
			if(window.innerWidth <= 1024){
				ctx.drawImage(pic4, 0, 0, 720, 1280, 0, 0, 375, 667)
				ctx.drawImage(pic3, 0, 0, 720, 1280*temp, 0, 0, 375, 667*temp)
			}
			else{
				ctx.drawImage(pic4, 0, 0, 1280, 720, 0, 0, 1280, 720)
				ctx.drawImage(pic3, 0, 0, 1280, 720*temp, 0, 0, 1280, 720*temp)
			}
		}
		else{
			video.pause()
			clearInterval(counter)
			counter = null
			$('#video-state-contain').css('opacity', 0)
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
