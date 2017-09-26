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
var app = new Vue({
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

	if(w < 1024){
		if(Utils.isFacebookApp()){
			$('#title-contain').css('margin-bottom', '128px')
		}
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
