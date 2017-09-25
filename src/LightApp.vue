<template>
	<div id="app">
		<Indicator color="#FF4612"/>
		<HeadBar>
			<div class="hbutton" data-target="1">夜市討生活的孩子</div>
			<div class="hbutton" data-target="2">靠捐助長大的女孩</div>
			<div class="hbutton" data-target="3">偏鄉兒也能當網紅</div>
			<div class="hbutton" data-target="4">被遺忘的孩子</div>
		</HeadBar>
		<Cover title="我們長大，<span class='hidden-md hidden-lg'><br /></span>把光亮帶回黑暗家鄉" title-bottom="55" title-left="35" title-width="310" title-height="77" title-width-web="812" title-height-web="55" title-left-web="200" title-bottom-web="53" font-size="35"/>
		<ContentContainer background-color="#ECEAEA">
			<p>台灣每10個窮人中，就有2個是兒童，家扶基金會曾粗略統計，有4-6%左右的孩子會陷入貧窮世襲，童年時食不果腹、缺乏保護，長大了也悲慘落入上一代的貧窮困境。</p>
			<p><br/></p>
			<p>「貧窮沒有解方，」長期扎根偏鄉、照顧學童的永齡教育基金會觀察，100個貧窮兒背後有100個故事，沒有同樣一致的解方，「只有幫每一個貧窮兒量身打造幸福。」靠近他們、傾聽他們，然後伸出手幫助他們。</p>
			<p><br/></p>
			<p>《聯合報》找到幾個孩子成長過程中遇到脫貧的方法，他們長大，身體力行去幫助命運相同、也落在社會安全網外的貧窮兒，努力回饋社會。</p>
			<p><br/></p>
			<Share />
		</ContentContainer>
		<FixedBackground id="fixbg-1" text="流動攤販討生活的孩子" :src="pic1_mobile" :src-web="pic1_web"/>
		<ContentContainer background-color="#ECEAEA">
			<p>23歲的陳良進是從小習慣同時打4份工的孩子，讀國中時，父母因為生意失敗、家道中落，三不五時就有黑道上門討債，借了30萬利息滾了幾百萬，全家人住在鐵皮屋裡，辛苦賺的錢都繳給地下錢莊。</p>
			<p><br/></p>
			<p>「我自己的生活費自己賺，到許多流動夜市賣饅頭，賣掉一顆賺5元，生意好時一個晚上賺400元，全家人隔天就能吃飽，」陳良進說，國一時黑道上門，指著他罵：沒錢讀什麼書，為什麼不出去賺錢？</p>
			<p><br/></p>
			<p>在這種環境下，除了每天打工賺錢溫飽外，學業上自暴自棄，上學只為了中午能吃到營養午餐。直到高中遇到良師跟他說「讀書CP值更高」，還教他計算成績多少可以換取多少獎學金，比賣饅頭划算。讓他從山上放牛班的學生變成國立大學第一名畢業，大學還靠獎學金幫家裡還完地下錢莊的債，現在就讀成大的研究所。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="讀書不是脫貧的唯一的路，卻是最快的唯一捷徑。" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p><br/></p>
			<p>陳良進打開電腦，秀出寫滿全國各機關、學校、宮廟提供的獎學金表格，並且標註了日期、申請條件以及金額，他按表操課，大學時雖然仍同時打3、4份工，但一定會留2天認真讀書，「因為讀書也是工作。」</p>
			<p><br/></p>
			<p>貧窮的日子連生病都不敢看醫生，他憑藉著毅力打工、讀書來脫貧，也能幫忙家裡買洗衣機、冰箱了。大學讀運動保健，研究所時鑽研老年學，因此周遭的同學去健身房當時下最夯的教練，他卻選擇走入偏鄉，教銀髮族運動、預防疾病。</p>
			<p><br/></p>
			<p>陳良進今年到台南偏鄉教老人運動，「自己沒有錢回饋社會、幫助別人，只好用一技之長回饋社區幫助老人家。」最近陳良進也接受中華人之幼協會邀請，擔任講師。</p>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic2_mobile" width-web="880" height-web="580" :src-web="pic2_web" imgsay="偏鄉不是老人就是小孩，貧窮弱勢也很多。吃盡貧窮苦味的陳良進回到家鄉，讓老人家動起來，預防疾病也能陪孫子長長久久。圖／陳良進提供"/>
			<p><br/></p>
			<p>人之幼協會近來紮根弱勢社區，布建社區安全網。人之幼協會表示，隨著社會變遷及家庭結構的改變，隔代、單親、新住民及近貧等弱勢家庭有逐年增加的趨勢，這些弱勢家庭也正處於M型社會的最底層，因福利服務或社會支持的不足，造成了弱勢家庭在貧窮文化邊緣流轉。</p>
			<p><br/><p>
			<p>人之幼協會認為，教育仍是促成社會階層流動的關鍵，因此以學童「學習落後點」做為課輔的起點，透過長期的教學與陪伴，奠定學習的基礎，進一步提升學習成就，重建對課業學習的信心與能力。</p>
			<p><br/></p>
			<p>另外，該協會也觀察學童的困境不單僅是課業落後，背後帶出更多的家庭、環境刺激不足或多元文化等問題，因此舉辦多元活動及小團體輔導，讓學童感受到愛、關懷、與歸屬感。尤其走入社區推展親職活動，協助強化家庭功能。更重要的是，促進「社區培力」，活絡地方產業，讓在地年輕人能夠留在故鄉，為地方社區注入新生命。</p>
			<p><br/></p>
			<p>陳良進就是該協會招攬留在台南家鄉貢獻的範例。總是面帶笑容，跟長輩講得一口好台語的陳良進，可以理解偏鄉貧困孩子的處境，「我是住在鐵皮屋長大的小孩，學習過程中遇到大大小小的貴人，因此長大後想回饋，也能看到不同的世界，」他說，走入偏鄉會跟貧窮兒說，不用害怕出身環境不好，要比拚的是10年、20年後的成就，他自己就是活生生的示範。</p>
			<p><br/></p>
			<div class="squre-board">
				<div class="squre-card">
					<h2>貧窮解方</h2>
					<p>1.體制外撈起需要幫助的貧窮兒</p>
					<p>2.運用在地人力，降低流動率</p>
					<p>3.貧窮兒長大返鄉回饋，自己家鄉的孩子自己救</p>
				</div>
				<img class="hidden-md hidden-lg" :src="pic3_mobile"/>
				<div class="pull-right">
					<img style="width:300px;height:197px;" class="hidden-xs hidden-sm" :src="pic3_web"/>
				</div>
			</div>
		</ContentContainer>
		<FixedBackground id="fixbg-2" text="依靠捐助長大的女孩" :src="pic4_mobile" :src-web="pic4_web"/>
		<ContentContainer background-color="#ECEAEA">
			<p>今年五月間，台北悠遊卡公司邀請幾位本土插畫家，讓畫作登上卡片頁面。其中一位是年甫30歲的黃雅玲，她共有「波隆納」及「LOVE IS ALL AROUND」二幅畫被挑中，「波隆納」是2016年波隆納世界插畫大展入選，「LOVE IS ALL AROUND」則是對不求回饋的社工老師們致敬的作品。</p>
			<p><br/></p>
			<p>很少人知道，為何黃雅玲要向社工老師們致敬。</p>
			<p><br/></p>
			<p>原來，她本身就是依靠家扶扶助長大的單親貧窮兒。「從小看著媽媽到處借錢，自己卻無能為力，」黃雅玲說，媽媽瘦小黝黑的身影，曲身在家中角落，從早踩著縫紉機到半夜，一針一線維持著她與姐姐的生活，「媽媽總是叫我們早點睡覺後，獨自繼續工作到深夜」。</p>
			<p><br/></p>
			<p>黃雅玲的爸爸早逝，媽媽日夜辛勞的身影，讓她了解「不能坐等別人幫忙」，自己努力才有被幫助的機會。她讀書受教育，拚上學費便宜的國立大學，靠獎學金讀完大學後，為了存錢到英國留學，還畫肖像畫募款，最後美夢成真。</p>
			<p><br/></p>
			<p>現在的黃雅玲，已經擺脫貧窮兒的困境，不僅出版個人畫冊，也開始回饋社會。</p>
			<p><br/></p>
			<ImageContain width="720" height="900" :src="pic5_mobile" width-web="446" height-web="580" :src-web="pic5_web" imgsay="黃雅玲（左）的插畫與庇護工場的孩子將合作製成衣服、口罩，販售的錢再回饋給需要的貧窮兒。右為高雄市肢體障礙協會暨折翼天使庇護工場創辦人蔡淑芳。"/>
			<p><br/></p>
			<p>人生路上大大小小的社工老師，都被黃雅玲當成重要貴人。她說，因為被這些關愛包圍，從不覺得貧窮兒要自卑或失去夢想。現在，她用溫暖的插畫說故事，尤其是針對容易感到「疏離、孤單」的孩子，透過故事希望讓他們有共鳴，感到有陪伴。</p>
			<p><br/></p>
			<p>近期她也將與高雄庇護工場的孩子合作，結合插畫與衣服，販售的錢將回饋給需要的貧窮孩子。</p>
			<p><br/></p>
			<p>高雄愛河旁邊的庇護工場裡，有30位認真的孩子，使用電動縫紉機製作手袋、衣服、口罩。這些孩子需要幫助，有些是身障，有些是精障，有些是因為慢性疾病造成的身體障礙。高雄市肢體障礙協會暨折翼天使庇護工場技輔老師蔡淑芳說，不是每個身心障礙者都有人幫忙安排人生，有的人終生被家人丟在機構裡不理不睬，有的人則被保護在家裡，什麼都做不了。</p>
			<p><br/></p>
			<p>「身心障礙者需要被認同、被肯定，<b>他們需要什麼，只有他們才知道</b>，」蔡淑芳教導孩子一技之長，盡可能的自立自強。高雄市肢體障礙協會暨折翼天使庇護工場總幹事林桂花說，「障礙不是殘障，弱勢的孩子也許需要花費比一般人更多的時間，但是他們最後都會抵達終點。」</p>			
			<p><br/></p>
			<p>她表示，因為以往庇護工場的困境，是訂單不穩定，因為近年接到永齡基金會希望小學制服大量訂單的生產經驗，因此庇護工場打算與黃雅玲合作，使用黃雅玲的插畫圖案，縫紉在身障孩子製作的手袋、衣服或口罩上。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="插畫將放在庇護工場的商品中，形成弱勢幫助弱勢的良善循環。" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p><br/></p>
			<p>「社會上有許多默默做事的人，但沒有得到回報，」黃雅玲認為，如今長大脫貧，能夠參與良善循環中的一部分，非常高興，自己從小雖然貧困，但一直接受到許多人的關愛，才能對自己的出身沒有自卑感，因此，現在更想回饋給需要的人。</p>
			<p class="hidden-xs hidden-sm"><br/></p>
			<div class="squre-board hidden-xs hidden-sm">
				<div class="squre-card" id="card-2">
					<h2>貧窮解方</h2>
					<img class="hidden-xs hidden-sm" :src="chart_web"/>
				</div>
			</div>
		</ContentContainer>
		<FixedBackground id="fixbg-3" text="偏鄉兒也能當網紅" :src="pic7_mobile" :src-web="pic7_web"/>
		<ContentContainer background-color="#ECEAEA">
			<p>暑假快結束，台北都會區不少專門教孩子自製影片，讓孩子當「YouTuber」的夏令營。但偏鄉的孩子可能連YouTube是什麼都不曉得。</p>
			<p><br/></p>
			<p>「共玩創作」創辦人吳彥杰走入全國大小鄉鎮，他教各地孩子製作影片，並且把影片上傳，至今已經接觸超過2千名7~13歲的學童。他說，在台北教課時，接觸到的孩子，有2至3成本身就是YouTuber！他們自己拍影片、剪接，然後上傳，即使只有100個人點閱也很開心。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="但是走入偏鄉小學，他發現孩子幾乎不曉得YouTube，也不懂得運用免費軟體。" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p><br/></p>
			<p>「曾到南部某偏鄉小學，想教孩子用平板製作影片，他們拿出一堆平板，是好幾年前企業捐過來到現在都沒拆封過，因為沒有人教孩子怎麼使用，」吳彥杰說，偏鄉缺的不一定是物質上的資源，因為政府、民間企業都很熱心願意幫忙，但是誰來教導、陪伴變成偏鄉教育問題。</p>
			<p><br/></p>
			<p>吳彥杰說，教偏鄉孩子按照步驟群體創作，他們製作出來的影片品質完全不輸給都會的孩子，之前曾經帶孩子拍攝過教育部的宣傳短片、能源議題短片。今年永齡基金會、鴻海基金會跟吳彥杰合作，把共創教材公共化，協助11個縣市、數十個學校的老師師培，讓學校的老師先學會使用免費的APP、剪接軟體，然後活化教學，運用在課堂上，讓孩子從小能跟科技無縫接軌。</p>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic8_mobile" width-web="880" height-web="580" :src-web="pic8_web" imgsay="都會、偏鄉都有弱勢貧窮兒，但偏鄉貧窮兒欠缺環境刺激，顯得更弱勢。吳彥杰（右）走入偏鄉教導孩子用免費軟體剪接出自己的故事。圖／吳彥杰提供"/>
			<p><br/></p>
			<p>教育部今年的祖父母節活動上，這些孩子充分展現創造力，製作數十支認識自己祖父母的<a href="https://www.youtube.com/watch?v=drFKAg7z5XI" target="_blank">影片</a>。吳彥杰說，教孩子製作影片時，發現很多孩子天天見到阿公阿嬤，卻不曉得阿嬤幾歲、年輕時做什麼工作，因此透過製作影片的方式，增加祖孫互動。有孩子製作影片，還讓阿嬤親自上陣配音，超級逗趣，每支影片也獲得許多瀏覽數與按讚數。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="相同資源下，學力沒有落差。" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p><br/></p>
			<p>吳彥杰說，偏鄉弱勢兒童本身的能力並不差，他們需要的是環境和機會，只要給他們一樣的資源，根本不存在學力落差。他觀察到這些貧窮兒小心謹慎，害怕犯錯，主要原因是「他們的環境沒有讓他們有犯錯的餘裕」，小康或是富裕家庭的孩子看似有創意敢冒險，是因為他們有失敗的空間，還有資源或大人的支持可以重新開始。</p>
			<p><br/></p>
			<p>因此，若要比較都會跟偏鄉的孩子，最大的不同是在於自信心，「自信心包含：孩子的自信心，還有周遭人對他們的信心。」但其實偏鄉孩子透過教學，很快就能自製精彩影片，為了不讓城鄉未來造成更大差距，吳彥杰未來還會繼續上山下海，把科技的光亮帶進偏鄉學校的教室中。</p>
			<p><br/></p>
			<div class="squre-board" id="board-3">
				<div class="squre-card">
					<h2>貧窮解方</h2>
					<p>1.物質資源之外，更需要關心教導</p>
					<p>2.給予「秀」的舞台，培育自信</p>
				</div>
				<img class="lazyload hidden-md hidden-lg" :src="pic9_mobile" />
				<div class="pull-right">
					<img style="width:300px;height: 214px;" class="hidden-sm hidden-xs" :src="pic9_web" />
				</div>
			</div>
			<p><br/></p>
			<div class="link">
				<div class="tree">
					<img :src="tree"/>
				</div>
				<div class="link-title">一起關心貧窮兒，感謝這些人的付出與資料提供 </div>
				<div class="link-text">
					<a target="_blank" href="https://www.facebook.com/%E4%BA%BA%E4%B9%8B%E5%B9%BC%E5%8D%94%E6%9C%83-Our-Children-Our-Hope-1097602967038554/?fref=ts"><span class="link-line">中華人之幼協會</span></a>
				</div>
				<div class="link-text">
					<a target="_blank" href="http://www.angle.org.tw/"><span class="link-line">高雄市肢體障礙協會暨折翼天使庇護工場</span></a>
				</div>
				<div class="link-text">
					<a target="_blank" href="http://www.yonglin.org.tw/"><span class="link-line">永齡基金會</span></a>
				</div>
				<div class="link-text">
					<a target="_blank" href="https://www.facebook.com/YongLinFoundation/?fref=ts"><span class="link-line">永齡慈善教育基金會FB粉絲專頁</span></a>
				</div>
				<div class="link-text">
					<a target="_blank" href="https://www.facebook.com/foxconnscholarship/"><span class="link-line">鴻海獎學鯨</span></a>
				</div>
				<div class="link-text">
					<a target="_blank" href="https://www.facebook.com/yaling.jade/?fref=ts"><span class="link-line">黃雅玲FB粉絲專頁</span></a>
				</div>
				<div class="link-text">
					<a target="_blank" href="https://www.facebook.com/jet1031?fref=ts"><span class="link-line">吳彥杰FB</span></a>
				</div>
			</div>
			<p><br/></p>
			<p><br/></p>
			<Share />
			<Logo />
			<p><br/></p>
			<Editor>
				<div>製作人、文字：林秀姿</div>
				<div>視覺設計、影音：許瑋琳</div>
				<div>攝影：林伯東、劉學聖、侯永全</div>
				<div>網頁製作：鄭偉廷</div>
				<div>監製：董谷音、蔡幸怡</div>
				<div>2017.10.03</div>
			</Editor>
			<p><br/></p>
			<Relate>
				<a href="./light.html" target="_blank" slot="relate-1">
					<img :src="relate1" />
					<p>被遺忘的孩子 我8歲，我住貨櫃屋</p>
				</a>
				<a href="https://udn.com/news/story/10722/2707319" target="_blank" slot="relate-2">
					<img :src="relate2" />
					<p>助脫貧…教技能 推存錢帳戶</p>
				</a>
				<a href="https://udn.com/news/story/7266/2698622?from=crm4-referralnews_ch2artbottom" target="_blank" slot="relate-3">
					<img :src="relate3" />
					<p>兒少發展帳戶推動3個月 申請率25%</p>
				</a>
				<a href="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" target="_blank" slot="relate-4">
					<img :src="relate4" />
					<p>流沙中年 棄6萬月新顧爸媽，我在貧窮線下度日</p>
				</a>
			</Relate>
			<p><br/></p>
			<FBComment />
		</ContentContainer>
		<Foot background-color="#ECEAEA"/>
		<div id="back-contain">
			<canvas id="back" ></canvas>
		</div>
	</div>
</template>

<script>
import Indicator from './components/Indicator'
import HeadBar from './components/HeadBar'
import Cover from './components/Cover'
import ContentContainer from './components/Content'
import Share from './components/Share'
import FixedBackground from './components/FixedBackground'
import Quote from './components/Quote'
import ImageContain from './components/ImageContain'
import Editor from './components/Editor'
import Logo from './components/Logo'
import FBComment from './components/FBComment'
import Relate from './components/Relate'
import Foot from './components/Footer'

import pic1_web from './assets/light/pic1.jpg'
import pic2_web from './assets/light/pic2.jpg'
import pic3_web from './assets/light/pic3.jpg'
import pic4_web from './assets/light/pic4.jpg'
import pic5_web from './assets/light/pic5.jpg'
import pic6_web from './assets/light/pic6.jpg'
import pic7_web from './assets/light/pic7.jpg'
import pic8_web from './assets/light/pic8.jpg'
import pic9_web from './assets/light/pic9.jpg'

import pic1_mobile from './assets/light/mobile/pic1.jpg'
import pic2_mobile from './assets/light/mobile/pic2.jpg'
import pic3_mobile from './assets/light/mobile/pic3.jpg'
import pic4_mobile from './assets/light/mobile/pic4.jpg'
import pic5_mobile from './assets/light/mobile/pic5.jpg'
import pic6_mobile from './assets/light/mobile/pic6.jpg'
import pic7_mobile from './assets/light/mobile/pic7.jpg'
import pic8_mobile from './assets/light/mobile/pic8.jpg'
import pic9_mobile from './assets/light/mobile/pic9.jpg'

import relate1 from './assets/relate5.jpg'
import relate2 from './assets/relate2.jpg'
import relate3 from './assets/relate3.jpg'
import relate4 from './assets/relate4.jpg'

import chart_web from './assets/light/chart.svg'
import chart_mobile from './assets/light/mobile/chart3-3.png'

import tree from './assets/light/tree.png'

var t = new Image()
var w = $(window).width()
var h = $(window).height()

export default {
	name: 'light',
	data: function(){
		return{
			pic1_web: pic1_web,
			pic2_web: pic2_web,
			pic3_web: pic3_web,
			pic4_web: pic4_web,
			pic5_web: pic5_web,
			pic6_web: pic6_web,
			pic7_web: pic7_web,
			pic8_web: pic8_web,
			pic9_web: pic9_web,
			pic1_mobile: pic1_mobile,
			pic2_mobile: pic2_mobile,
			pic3_mobile: pic3_mobile,
			pic4_mobile: pic4_mobile,
			pic5_mobile: pic5_mobile,
			pic6_mobile: pic6_mobile,
			pic7_mobile: pic7_mobile,
			pic8_mobile: pic8_mobile,
			pic9_mobile: pic9_mobile,
			relate1: relate1,
			relate2: relate2,
			relate3: relate3,
			relate4: relate4,
			chart_web: chart_web,
			chart_mobile: chart_mobile,
			tree: tree
		}
	},
	components: {
		Indicator, HeadBar, Cover, ContentContainer, Share, FixedBackground, Quote, ImageContain, Editor, Logo, FBComment, Relate, Foot
	}
}
</script>

<style>
	#app{
		overflow: hidden;
	}
</style>
