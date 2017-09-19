<template>
	<div id="app">
		<Indicator />
		<HeadBar />
		<Cover title="貧窮世襲<br />被遺忘的孩子" title-bottom="65" title-left="40" title-width="270" title-height="95" :bg="bg" :bg_mobile="bg_mobile"/>
		<ContentContainer background-color="#ECEAEA">
			<p>從車站到學校，沿途都是荒煙蔓草，雜草比人高，幾乎把車道掩埋。在這裡，有個小女孩住在貨櫃屋裡。</p>
			<p><br/></p>
			<p>她剛學會走路時，就跟著爸爸從花蓮流浪到台中、彰化、雲林，最後在西螺大橋下遊蕩，沒有居所。</p>
			<p><br/></p>
			<Share href="index.html" />
		</ContentContainer>
		<FixedBackground text="住在貨櫃屋裡的女孩" :src="pic1_mobile" :src-web="pic1_web"/>
		<ContentContainer background-color="#ECEAEA">
			<Quote text="檳榔攤的阿姨問她：「媽媽呢？」「媽媽跑了。」" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p><br/></p>
			<p>人們發現她的時候還沒上小學，除了這句話，她怕生不說話，對人充滿警戒，面無表情，就像野生動物。</p>
			<p><br/></p>
			<p>路過西螺大橋的鄉民，好心幫爸爸介紹工作，讓他有收入，勉強可以租個房子安頓女兒，但卻因為衛生習慣不佳，把房子弄得太髒亂遭房東趕出去。雇主楊金元把用來當倉庫的貨櫃屋清出來，讓父女有個遮風避雨的地方。</p>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic2_mobile" :src-web="pic2_web" width-web="880" height-web="580" imgsay="圖說圖說圖說圖說"/>
			<p><br/></p>
			<p>「她爸爸來我這邊打工，我們每天六點就出門了，結果小孩常常沒上學，有時候6天沒上學、10天沒上學，情況很嚴重，老師找不到她爸爸，就打電話給我找小孩、校長也打給我、社會局也打給我，最後連少年組也打給我了！」楊大哥說，閒置的貨櫃屋剛好在學校正對面，也方便學校老師早上來帶孩子去上課。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="但小女孩不會洗澡，也不會洗衣服，因為貨櫃屋沒有浴室，也沒有晾衣服的地方，渾身異味導致其他孩子排斥她。" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p><br/></p>
			<p>小女孩的班導師說，學校把校內的淋浴間整理出來給小女孩洗澡跟晾衣服，同學看他的眼光變友善，才能讓她融入群體。</p>
			<p><br/></p>
			<p>不只是洗澡問題，每天接她上課時，班導師總會看到貨櫃屋裡滿地的垃圾，連衣服襪子也丟在地上凌亂一團。楊大哥與班導師，一人盯爸爸、一人 漠然，得重新開始輔導。</p>
			<p><br/></p>
			<p>貨櫃屋原本一無長物，只有簡陋的鐵皮搭蓋，地上鋪著一個二手床墊讓父女睡覺，「我去問心理師該怎麼做，他說要能提供給孩子一個安全的環境，來學校比在家覺得安全。現在她覺得家裡比較安全，因為學校會有功課壓力，能不能透過情感的連結，強化到在學校是受關愛，可以安全學習。」</p>
			<p><br/></p>
			<p>課輔老師拜託合作課程的永齡教育基金會幫忙，協同台南市勞工局的志工隊，把貨櫃屋的環境改善，包括加裝隔熱、裝設衛浴設備，志工隊熱情迅速，很快地讓父女有可以安心洗熱水澡、洗衣服的地方。</p>
		</ContentContainer>
		<div id="cross-1" class="blank"></div>
		<div id="cross-2" class="blank"></div>
		<ContentContainer background-color="#ECEAEA">
			<p>課輔老師拜託合作課程的永齡教育基金會幫忙，協同台南市勞工局的志工隊，把貨櫃屋的環境改善，包括加裝隔熱、裝設衛浴設備，志工隊熱情迅速，很快地讓父女有可以安心洗熱水澡、洗衣服的地方。</p>
			<p><br/></p>
			<p>「我的補救教學班上有3個孩子，她與另外2個孩子的情感連結很強，她說：『我們都沒有媽媽』，他們覺得是同一國的。」課輔老師自己也有3個孩子，她把這個怕生、很難融入群體也有創傷的小女孩當成自己的孩子一樣教養。</p>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic5_mobile" width-web="880" height-web="580" :src-web="pic5_web" imgsay="圖說圖說圖說圖說"/>
			<p><br/></p>
			<p>小女孩的爸爸就像玩伴，能陪伴她卻沒辦法教導孩子，但課輔老師體恤地說，她爸爸也很少跟人群接觸，有一次教導小女孩洗衣服時，本來懶散的爸爸看了覺得很不好意思，急忙的謝謝老師與學校，回到家，洗乾淨的衣服也收拾好，不再亂丟、散落一地，這是用行動來影響父女倆，「你伸出個援手就是個溫度，這個溫度能不能一點點的改變。不是用語言的方式，而是用行動的方式。」</p>
		</ContentContainer>
		<FixedBackground text="等鄰居開門的男孩" :src="pic6_mobile" :src-web="pic6_web"/>
		<ContentContainer background-color="#ECEAEA">
			<p>小翔每天早上就去鄰居同學家門口站著，等鄰居媽媽起床開門，可以被召喚進去，吃點心看電視。因為小翔總是從昨天吃完營養午餐後，一路挨餓到今天早上。</p>
			<p><br/></p>
			<p>一次二次三次，小翔總黏著鄰居同學家，鄰居同學的媽媽不敢出門辦事，只好把女兒送到阿公家，沒想到小翔也跟著同學到阿公家吃晚餐。</p>
			<p><br/></p>
			<Quote text="阿公問他：為什麼不回家？小翔說：我家沒人，我沒東西吃..." color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p>直到台南市兒少站介入輔導，幫他準備晚餐。「他的處境很糟，」小翔的老師說，他不是失親兒，更不是單親家庭，他跟爸爸媽媽住在一起，但爸爸媽媽卻不工作，作息也不正常，爸媽更不覺得小孩需要上學。</p>
			<p><br/></p>
			<p>小翔的家是矮矮的老舊磚造屋，和爸媽一起睡覺的房間，到處都是堆滿的煙蒂。蓋在屋後防火巷中的廁所沒有門，洗菜、洗衣服、洗澡就在屋前的小空地，之前冬天還沒有熱水可洗。「這些都是撿來的，」小翔爸爸指著空地上的板凳、木桌子說，自己學歷不高，在鄉下找工作困難，而且中年以後才生下小翔，不曉得還能照顧孩子幾年。</p>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic7_mobile" width-web="880" height-web="580" :src-web="pic7_web" imgsay="小翔跟父母同睡在一間房裡。"/>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic8_mobile" width-web="880" height-web="580" :src-web="pic8_web" imgsay="打開浴室的水龍頭時，小翔會說：洗手要快，不然水費很貴。"/>
			<p><br/></p>
			<p>小翔老師說，小翔等同中輟生的輔導，學校為了他申請很多資源，包括家庭教育中心、台南市兒少站、教育局替代役輔導等，還有學校也給予經濟上的支援，包括瓦斯、熱水器等，至少先解決洗澡的問題，起初小翔常常一整個月都不洗澡。</p>
			<p><br/></p>
			<p>「生活很困難，我一天賺1千元，一個月賺14、5天而已。1萬4、5千元，花不夠，還要負擔小孩、負擔水電，開銷都是我在付，他媽媽也不管，」小翔的爸爸過去不工作，這一年來，因為小翔成績進步，他突然感受到自己的孩子也許會有出息，在兒少站的課輔老師鼓勵下出門工作。</p>
			<p><br/></p>
			<p>兒少站課輔老師陳美如說，以前小翔會翹課、會偷竊，是因為爸爸媽媽有偷竊習慣，孩子在旁邊看著學，媽媽為什麼沒準備晚餐？不只是沒錢，也是沒有這個習慣，「他爸爸會說我們以前也是這樣長大，小翔為什麼不行？」</p>
			<p><br/></p>
			<p>小翔放學後到兒少站寫功課，成績慢慢進步，從考20分進步到80分，拿到第一筆獎學金時，他爸爸突然感覺自己也應該改變，一年半來工作沒短缺過，一改過去每個禮拜換一次工作的情況。</p>
			<p><br/></p>
			<Quote text="貧窮的孩子沒出息嗎？只要給他們舞台就可以發揮得更好。" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p>陳美如從事教育輔導工作超過20年，她認為，貧窮兒童缺乏物資，但也缺乏關懷陪伴，更缺乏舞台。她舉小翔為例，小翔舞蹈肢體不協調，選不上學校的舞蹈比賽，永遠只有在台下乾瞪眼的份，但兒少站幫這些弱勢兒童找舞台，參加社區的大型聯歡活動，讓每個孩子上台，一個人鼓掌就得到一份肯定。</p>
			<p><br/></p>
			<p>「他們不是壞孩子，是可以被培育成乖孩子、有成就的孩子。」陳美如說，表演時看著他們自動自發搬器材、 互相打理儀容、幫對方綁鞋帶，「兒少站的孩子很多都單親，有的父母離婚、有的媽媽跑掉，更別說隔代教養，很多阿公、阿嬤也都不在了，被親戚收留，但他們都可以幫家人撐起這個家...。」</p>
		</ContentContainer>
		<FixedBackground text="貧窮兒童的現況" :src="pic9_mobile" :src-web="pic9_web"/>
		<div id="chart-contain">
			<div id="chart"></div>
		</div>
		<ContentContainer background-color="#ECEAEA">
			<h2>台灣貧窮兒是下流老人的3倍</h2>
			<p><br/></p>
			<p>2015年台灣的貧富差距又創史上第二高，最有錢的前5%家庭跟最窮的後5%家庭，收入相差100倍以上。根據衛福部資料，低收與中低收入老人占總人口數5.89%，未滿12歲的貧窮兒童卻占有18.34%，人數是貧窮老人的三倍，台灣沒有下流老人，貧窮困苦的年齡層集中在流沙中年，以及台灣的下一代、將近12萬個貧窮兒童。</p>
			<p><br/></p>
			<p>這些數字冷冰冰，但走一趟偏鄉的貨櫃屋、走一趟小翔的家，貧窮的苦境躍於眼前，他們每天生活在惡劣的環境中，但他們卻落在社會安全網外。住貨櫃屋的女孩戶籍紊亂，父親也沒法申請政府低收、中低收補助，而小翔即使居住的環境惡劣破舊、沒熱水，但仍屬於擁有「不動產」一族，更無法申請政府補助。他們都屬於「12萬貧童」之外的邊緣弱勢。</p>
			<p><br/></p>
			<p>還有更多像他們一樣落在安全網外的孩子，「你們住在台北可能不相信，這裡很多8、9歲的孩子為了吃一頓飯，每天要到同學家裡幫忙打掃、洗碗，賺零用錢。」台南市兒少站的課輔老師陳美如說，這些孩子都有家人，但是沒有人可以溫飽，每天上學的營養午餐是唯一正常的飯食。</p>
			<p><br/></p>
			<p>「隱藏性的高關懷兒童很多，」 永齡希望小學成大分校社工督導黃慧菁說，不少農業縣市偏鄉資源相對少，弱勢兒童特徵很明顯，他們可能不太洗頭洗澡、穿著衣物破舊，甚至身上有尿騷味，家訪時也可以一眼分辨傢俱都是二手、撿來的物品。</p>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic8_mobile" width-web="880" height-web="580" :src-web="pic10_web" imgsay="有研究顯示，約半數的貧窮家戶會持續4年貧困，四分之一的家戶甚至超過8年以上都處於貧困狀態，無法脫貧。"/>
			<p><br/></p>
			<h2>隱性貧窮兒 不知玫瑰是什麼</h2>
			<p><br/></p>
			<p>但是台南或其他六都的貧窮兒童，表面上很難被辨識出來。黃慧菁說，隱性貧窮兒的雙親都有工作，天天疲於奔命、早出晚歸，但兩人努力合賺的收入不到上班族一個人的收入，孩子也因此常餓肚子又沒人照顧，下課後四處遊蕩。</p>
			<p><br/></p>
			<p>他們更欠缺文化刺激，住在市區卻沒聽過自強號、莒光號，遑論高鐵，連計算數學題，要他們數玫瑰花的數量，他們還問老師：「玫瑰花是什麼？」</p>
			<p><br/></p>
			<p>黃慧菁說，他們多數無法進入低收、中低收入戶補助的社會安全網內，屬於邊緣弱勢兒，是社會夾層中的孩子。</p>
			<p><br/></p>
			<p>「台灣的社會安全網很難進入，」東吳大學教授李淑蓉說，以政府預算結構來看，用在貧窮的預算偏低。她分析，中央預算中有4773億多元放在社會福利，比教育、國防的預算還多，占最大宗。 但這當中僅2.75%用在低收與中低收入戶的補助，「比去年還減少，但貧窮的人口在增加，補助卻減少？這說明什麼？」李淑蓉說，這2.7%的補助集中在全民健保、醫療看護、學費雜費減免等，都不是生活上的補助。此外，地方預算中，社會救助也只占0.012%。</p>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic11_mobile" width-web="880" height-web="580" :src-web="pic10_web" imgsay="越來越多的孩子無法進入社會安全網，教育會是孩子脫貧的機會嗎？"/>
			<p><br/></p>
			<h2>近貧兒童倍增 他們卻落在安全網外</h2>
			<p><br/></p>
			<p>除了預算分配出現問題外，國內的資格定義、審查方式，甚至審查人員的價值觀，都會影響這些孩子能不能進入補助範圍。</p>
			<p><br/></p>
			<p>台師大教授王永慈分析，政府定義有工作能力是指「年滿18歲、懷孕生子若3歲以上」就是有工作能力，被認定可以工作，區公所看你好手好腳，並未符合沒有工作能力，社會救助法就會用基本工資來計算。</p>
			<p><br/></p>
			<p>再來是審查問題，進入實質審核時多採書面，因為案量過多，審查時很難透過家訪而得，因此前端誰來發現、誰來協助這些貧窮家戶提出申請變成重要關鍵人。王永慈分析，「審核人員的價值觀也會影響審查結果，他們怎麼看待不穩定就業，或失業這些事情？如何看待孩子有爸爸、媽媽卻還來申請補助？」</p>
			<p><br/></p>
			<p>台灣官方統計顯示，低收與中低收家戶數僅占總家戶數3%，但根據盧森堡所得研究中心（LIS）的資料，可以看出台灣貧窮兒童的增加趨勢，20年來落入極度貧窮的人數確實穩定持平，但是近貧人數卻已逐年呈倍數增長，顯示越來越多的兒童無法進入安全網的救助體系。</p>
			<p><br/></p>
			<h2>負債問題 恐讓兒童陷入貧窮世襲命運</h2>
			<p><br/></p>
			<p>但是台南或其他六都的貧窮兒童，表面上很難被辨識出來。黃慧菁說，隱性貧窮兒的雙親都有工作，天天疲於奔命、早出晚歸，但兩人努力合賺的收入不到上班族一個人的收入，孩子也因此常餓肚子又沒人照顧，下課後四處遊蕩。</p>
			<p><br/></p>
			<p>他們更欠缺文化刺激，住在市區卻沒聽過自強號、莒光號，遑論高鐵，連計算數學題，要他們數玫瑰花的數量，他們還問老師：「玫瑰花是什麼？」</p>
			<p><br/></p>
			<p>黃慧菁說，他們多數無法進入低收、中低收入戶補助的社會安全網內，屬於邊緣弱勢兒，是社會夾層中的孩子。</p>
			<p><br/></p>
			<p>「台灣的社會安全網很難進入，」東吳大學教授李淑蓉說，以政府預算結構來看，用在貧窮的預算偏低。她分析，中央預算中有4773億多元放在社會福利，比教育、國防的預算還多，占最大宗。 但這當中僅2.75%用在低收與中低收入戶的補助，「比去年還減少，但貧窮的人口在增加，補助卻減少？這說明什麼？」李淑蓉說，這2.7%的補助集中在全民健保、醫療看護、學費雜費減免等，都不是生活上的補助。此外，地方預算中，社會救助也只占0.012%。</p>
			<p><br/></p>
			<p><br/></p>
			<Share href="index.html" />
			<Logo />
			<p><br/></p>
			<p><br/></p>
			<Editor>
				<div>文字：林秀姿、蔡佩蓉、劉嘉韻、鄧桂芬</div>
				<div>影音、視覺設計：許瑋琳、蘇士堯</div>
				<div>攝影：黃仲裕、林俊良、胡經周</div>
				<div>網頁製作：鄭偉廷</div>
				<div>監製：林新輝、洪淑惠、董谷音、魏忻忻、蔡幸怡</div>
				<div>議題行銷：張乃文、蔡嘉棋、盧巧梅</div>
				<div>2017.04.27</div>
			</Editor>
			<p><br/></p>
			<FBComment href="index.html" />
		</ContentContainer>
		<canvas id="back" ></canvas>
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

import bg from './assets/bg.jpg'
import bg_mobile from './assets/bg_mobile.jpg'

import pic1_web from './assets/pic1.jpg'
import pic2_web from './assets/pic2.jpg'
import pic3_web from './assets/pic3.jpg'
import pic4_web from './assets/pic4.jpg'
import pic5_web from './assets/pic5.jpg'
import pic6_web from './assets/pic6.jpg'
import pic7_web from './assets/pic7.jpg'
import pic8_web from './assets/pic8.jpg'
import pic9_web from './assets/pic9.jpg'
import pic10_web from './assets/pic10.jpg'
import pic11_web from './assets/pic11.jpg'

import pic1_mobile from './assets/mobile/pic1.jpg'
import pic2_mobile from './assets/mobile/pic2.jpg'
import pic3_mobile from './assets/mobile/pic3.jpg'
import pic4_mobile from './assets/mobile/pic4.jpg'
import pic5_mobile from './assets/mobile/pic5.jpg'
import pic6_mobile from './assets/mobile/pic6.jpg'
import pic7_mobile from './assets/mobile/pic7.jpg'
import pic8_mobile from './assets/mobile/pic8.jpg'
import pic9_mobile from './assets/mobile/pic9.jpg'
import pic10_mobile from './assets/mobile/pic10.jpg'
import pic11_mobile from './assets/mobile/pic11.jpg'

import './style.css'

var pic3, pic4
var chart_flag = false

export default {
	name: 'app',
	data: function(){
		return{
			h: window.innerHeight,
			w: window.innerWidth,
			animation: null,
			bg: bg,
			bg_mobile: bg_mobile,
			pic1_web: pic1_web,
			pic2_web: pic2_web,
			pic3_web: pic3_web,
			pic4_web: pic4_web,
			pic5_web: pic5_web,
			pic6_web: pic6_web,
			pic7_web: pic7_web,
			pic8_web: pic8_web,
			pic9_web: pic9_web,
			pic10_web: pic10_web,
			pic11_web: pic11_web,
			pic1_mobile: pic1_mobile,
			pic2_mobile: pic2_mobile,
			pic5_mobile: pic5_mobile,
			pic6_mobile: pic6_mobile,
			pic7_mobile: pic7_mobile,
			pic8_mobile: pic8_mobile,
			pic9_mobile: pic9_mobile,
			pic10_mobile: pic10_mobile,
			pic11_mobile: pic11_mobile,
			canvas: null,
			ctx: null
		}
	},
	mounted: function(){
		window.addEventListener('scroll', this.handleScroll)
		if(this.w <= 1024){
			$('#back').prop('width', 375)
			$('#back').prop('height', 667)
			pic3 = new Image()
			pic3.src= pic3_mobile
			pic4 = new Image()
			pic4.src= pic4_mobile
		}
		else{
			$('#back').prop('width', 1280)
			$('#back').prop('height', 720)
			pic3 = new Image()
			pic3.src= pic3_web
			pic4 = new Image()
			pic4.src= pic4_web
		}
		this.canvas = document.getElementById('back');
		this.ctx = this.canvas.getContext('2d');
		this.ctx.font = '15px microsoft jhenghei'
		if(this.w <= 1024){
			this.animation = bodymovin.loadAnimation({
				container: document.getElementById('chart'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: './static/mobile/data.json'
			})
		}
		else{
			this.animation = bodymovin.loadAnimation({
				container: document.getElementById('chart'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: './static/data.json'
			})
		}
		
		window.addEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll: function(e){
			let scroll_now = event.srcElement.body.scrollTop
			let cross1 = $('#cross-1').offset().top
			let cross2 = $('#cross-2').offset().top
			let chart = $('#chart-contain').offset().top
			$('.blank').css('height', this.h+'px')
			$('#cover').css('height', this.h+'px')
			if(scroll_now > chart - this.h && scroll_now < chart){
				if(!chart_flag){
					$('#chart').css('opacity', 1)
					this.animation.play()
					chart_flag = true
				}
			}
			
			if(scroll_now >= cross1 - (this.h + 200) && scroll_now < cross2 - this.h){
				$('#back').css('opacity', 1)
				$('#back').css('visibility', 'visible')
				$('#back2').css('opacity', 1)
				$('#back2').css('visibility', 'visible')
				if(this.w <= 1024){
					this.ctx.drawImage(pic3, 0, 0, 720, 1280, 0, 0, 375, 667)
					this.ctx.rect(0, 607, 375, 30)
					this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
					this.ctx.fill()
					this.ctx.fillStyle = '#FFFFFF'
					this.ctx.fillText('貨櫃屋裡滿是撿來的二手家具。', 20, 627)
				}
				else{
					this.ctx.drawImage(pic3, 0, 0, 1280, 720, 0, 0, 1280, 720)
					this.ctx.rect(0, 690, 1280, 30)
					this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
					this.ctx.fill()
					this.ctx.fillStyle = '#FFFFFF'
					this.ctx.fillText('貨櫃屋裡滿是撿來的二手家具。', 20, 710)
				}
				
			}
			else if(scroll_now >= cross2 - this.h && scroll_now < cross2 + this.h){
				$('#back').css('opacity', 1)
				$('#back').css('visibility', 'visible')
				$('#back2').css('opacity', 1)
				$('#back2').css('visibility', 'visible')
				let temp = (cross2 - scroll_now) / this.h.toFixed(2)
				if(this.w <= 1024){
					this.ctx.drawImage(pic4, 0, 0, 720, 1280, 0, 0, 375, 667)
					this.ctx.drawImage(pic3, 0, 0, 720, 1280*temp, 0, 0, 375, 667*temp)
					this.ctx.rect(0, 607, 375, 30)
					this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
					this.ctx.fill()
					this.ctx.fillStyle = '#FFFFFF'
					this.ctx.fillText('今年7月中改善後的貨櫃屋，四周鐵皮加裝了隔熱牆。', 20, 627)
				}
				else{
					this.ctx.drawImage(pic4, 0, 0, 1280, 720, 0, 0, 1280, 720)
					this.ctx.drawImage(pic3, 0, 0, 1280, 720*temp, 0, 0, 1280, 720*temp)
					this.ctx.rect(0, 690, 1280, 30)
					this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
					this.ctx.fill()
					this.ctx.fillStyle = '#FFFFFF'
					this.ctx.fillText('今年7月中改善後的貨櫃屋，四周鐵皮加裝了隔熱牆。', 20, 710)
				}
				
				console.log(6)
			}
			else{
				$('#back').css('opacity', 0)
				$('#back').css('visibility', 'hidden')
				$('#back2').css('opacity', 0)
				$('#back2').css('visibility', 'hidden')
			}
		}
	},
	components: {
		Indicator, HeadBar, Cover, ContentContainer, Share, FixedBackground, Quote, ImageContain, Editor, Logo, FBComment
	}
}
</script>

<style>
	#app{
		overflow: hidden;
	}
</style>
