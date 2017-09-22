// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Light from './LightApp'

import Utils from 'udn-newmedia-utils'

import './style.css'

import bg from './assets/light/bg.jpg'
import bg_mobile from './assets/light/bg_mobile.jpg'

Vue.config.productionTip = false

var title = $('title').text()
var isMob = Utils.detectMob();
var platform = (isMob == true) ? 'Mob' : 'PC'

/* eslint-disable no-new */
new Vue({
	el: '#app',
	mounted: function(){
		
	},
	template: '<Light/>',
	components: { Light }
})

$(document).ready(function(){
	var w = $(window).width()
	var h = $(window).height()

	var scroll_now
	var fixbg1, fixbg2, fixbg3

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

	if(w < 1025){
		$('#back-bg').attr('src', bg_mobile)
	}
	else{
		$('#back-bg').attr('src', bg)
	}

	$('#nav-icon').click(function(){
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
				"eventLabel": "[" + platform + "] [" + title + "] [index.html] [" + $(this).parent().attr('class') + "]"
			});
			window.open('./index.html')
		}
	})

	$(window).on('scroll', function(){
		scroll_now = $(window).scrollTop();
		fixbg1 = $('#fixbg-1').offset().top
		fixbg2 = $('#fixbg-2').offset().top
		fixbg3 = $('#fixbg-3').offset().top
		$('.blank').css('height', h+'px')
		$('#cover').css('height', h+'px')

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
	})
})
