<template>
	<div id="app">
		<Indicator color="#FF4612"/>
		<HeadBar>
			<div class="hbutton" data-target="1">住在貨櫃屋的女孩</div>
			<div class="hbutton" data-target="2">等鄰居開門的男孩</div>
			<div class="hbutton" data-target="3">邊緣弱勢人數倍增</div>
			<div id="s-hbutton" class="hbutton" data-target="4">解方篇</div>
		</HeadBar>
		<Cover title="<b>被遺忘的孩子</b><br />我8歲，我住貨櫃屋" font-size="38" title-bottom="65" title-left="30" title-width="320" title-height="95" title-width-web="500" title-height-web="124" title-left-web="116" title-bottom-web="112"/>
		<div style="height:30vh;"></div>
		<div class="video-contain">
			<video id="movie-2" playsinline data-target="2"></video>
			<div class="video-control">
				<div class="progress hidden-md hidden-lg">
					<div id="progress-bar-2" class="progress-bar progress-bar-striped"></div>
				</div>
				<div class="img-say-out volume-text hidden-md hidden-lg" data-target="2">點按開聲音</div>
				<i class="fa fa-spinner fa-pulse video-wait" data-target="2"></i>
				<i class="fa fa-play video-play" data-target="2"></i>
				<i class="fa fa-volume-off volume hidden-md hidden-lg" data-target="2"></i>
				<i class="fa fa-repeat replay hidden-md hidden-lg" data-target="2"></i>
			</div>
		</div>
		<ContentContainer background-color="#ECEAEA">
			<p><br/></p>
			<p class="orange">編按提醒：貧窮兒需要溫暖，但期盼讀者支持「不打擾的關心」。</p>
			<p><br/></p>
			<p>20年來，台灣邊緣弱勢兒童增加一倍。《聯合報》找到8歲住在貨櫃屋的女孩、找到住在破舊髒亂沒熱水澡可洗的10歲男孩，但我們不想一次性消費個案故事，也不是給予捐款就能幫孩子翻轉命運。我們想邀請讀者探究為何這麼多孩子落在社會安全網之外？理解社會制度出了何種問題，進一步督促政府補好安全網。</p>
			<p><br/></p>
			<Share href="https://udn.com/upf/newmedia/2017_data/poverty/index.html" />
		</ContentContainer>
		<FixedBackground id="fixbg-1" text="住在貨櫃屋裡的女孩" :src="pic1_mobile" :src-web="pic1_web"/>
		<ContentContainer background-color="#ECEAEA">
			<p>從車站到學校，沿途都是荒煙蔓草，雜草比人高，幾乎把車道掩埋。在這裡，有個小女孩住在貨櫃屋裡。</p>
		`	<p><br/></p>
			<p>她剛學會走路時，就跟著爸爸從花蓮流浪到西部偏鄉，最後在河邊橋下遊蕩，沒有居所。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="檳榔攤的阿姨問她：「媽媽呢？」「媽媽跑了。」" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p><br/></p>
			<p>人們發現她的時候還沒上小學，除了這句話，她怕生不說話，對人充滿警戒，面無表情，就像野生動物。</p>
			<p><br/></p>
			<p>路過大橋的鄉民，好心幫爸爸介紹工作，讓他有收入，勉強可以租個房子安頓女兒，但因種種因素又遭房東趕出去。雇主把用來當倉庫的貨櫃屋清出來，讓父女有個遮風避雨的地方。</p>
			<p><br/></p>
			<p>「她爸爸來我這邊打工，我們每天六點就出門了，結果小孩常常沒上學，有時候6天沒上學、10天沒上學，情況很嚴重，老師找不到她爸爸，就打電話給我找小孩、校長也打給我、社會局也打給我，最後連少年組也打給我了！」雇主說，閒置的貨櫃屋剛好在學校附近，也方便學校老師早上來帶孩子去上課。</p>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic2_mobile" :src-web="pic2_web" width-web="880" height-web="580" imgsay="小女孩剛會走路時，爸爸就帶著她到處跑，開過卡車司機、當過搬運工人，現住在貨櫃屋裡安頓。"/>
			<p><br/></p>
			<p><br/></p>
			<Quote text="但小女孩不會洗澡，也不會洗衣服，因為貨櫃屋沒有浴室，也沒有晾衣服的地方，渾身異味導致其他孩子排斥她。" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p><br/></p>
			<p>小女孩的班導師說，學校把校內的淋浴間整理出來給小女孩洗澡跟晾衣服，同學看她的眼光變友善，才能讓她融入群體。</p>
			<p><br/></p>
			<p>不只是洗澡問題，每天接她上課時，還會教導小女孩整理家裡。「家庭幾乎失去功能的情況下，學校老師能做的就是補強親職功能，」課後輔導老師說，小女孩長期只跟爸爸互動，到學校也需要「暖機」半小時以上才敢開口說話，而往往經過一個週末，周一到校又是一臉漠然，得重新開始輔導。</p>
			<p><br/></p>
			<p>貨櫃屋原本一無長物，只有簡陋的鐵皮搭蓋，地上鋪著一個二手床墊讓父女睡覺，「我去問心理師該怎麼做，他說要能提供給孩子一個安全的環境，來學校比在家覺得安全。現在她覺得家裡比較安全，因為學校會有功課壓力，能不能透過情感的連結，強化到在學校是受關愛，可以安全學習。」</p>
		</ContentContainer>
		<div id="cross-1" class="blank"></div>
		<div id="cross-2" class="blank"></div>
		<ContentContainer background-color="#ECEAEA">
			<p>課輔老師尋求合作補救教學課程的永齡基金會幫忙，提供房屋修繕費，永齡也找來幫忙修繕的志工隊，把貨櫃屋的環境改善，包括加裝隔熱、裝設衛浴設備，志工隊熱情迅速，很快地讓父女有可以安心洗熱水澡、洗衣服的地方。</p>
			<p><br/></p>
			<p>「我的補救教學班上有3個孩子，她與另外2個孩子的情感連結很強，<b>她說：『我們都沒有媽媽』，他們覺得是同一國的。」</b>課輔老師自己也有3個孩子，她把這個怕生、很難融入群體也有創傷的小女孩當成自己的孩子一樣教養。</p>
			<p><br/></p>
			<p>小女孩的爸爸就像玩伴，能陪伴她卻沒辦法教導孩子，但課輔老師體恤地說，她爸爸也很少跟人群接觸，有一次教導小女孩洗衣服時，爸爸看了急忙的謝謝老師與學校，回到家，洗乾淨的衣服也收拾好，<b>「你伸出個援手就是個溫度，這個溫度能不能一點點的改變。不是用語言的方式，而是用行動的方式。」</b></p>
		</ContentContainer>
		<FixedBackground id="fixbg-2" text="等鄰居開門的男孩" :src="pic6_mobile" :src-web="pic6_web"/>
		<ContentContainer background-color="#ECEAEA">
			<p>「我想要當畫家，也想當檢察官...，」今年才10歲的小寶（化名）在屋簷下拿筆畫畫。小寶的家是矮矮的老舊磚造屋，蓋在屋後防火巷中的廁所沒有門，洗菜、洗衣服、洗澡就在屋前的小空地，之前冬天還沒有熱水可洗。</p>
			<p><br/></p>
			<p>「這些都是撿來的，」小寶爸爸指著空地上的板凳、木桌子說，「我的學歷不高，年紀也大了，在鄉下找工作很困難，而且中年以後才生下小寶，不曉得還能照顧孩子幾年...。」</p>
			<p><br/></p>
			<p>現在的小寶樂觀又充滿笑容，但一年多前，他每天早上就去同學家門口站著，等同學媽媽起床開門，可以被召喚進去，吃點心看電視。因為<b>小寶總是從昨天吃完營養午餐後，一路挨餓到今天早上。</b></p>
			<p><br/></p>
			<p>直到兒少站介入輔導，幫他準備晚餐。兒少站課輔老師陳美如一路陪伴小寶，讓他每天下課後到兒少站寫功課，這一年來小寶成績慢慢進步，從考20分進步到80分。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="小寶申請到第一筆獎學金時，小寶的爸爸突然感覺一家人的命運也可以被改變。" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic7_mobile" width-web="880" height-web="580" :src-web="pic7_web" imgsay="小寶跟父母同睡在一間房裡。"/>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic8_mobile" width-web="880" height-web="580" :src-web="pic8_web" imgsay="打開浴室的水龍頭時，小寶會說：洗手要快，不然水費很貴。"/>
			<p><br/></p>
			<p>兒少站的課輔老師陳美如說，小寶的父母都外出打零工，「鄉下工作不好找，而且即使雙親都工作，賺的錢加起來還不到一般上班族一個人的薪水。」</p>
			<p><br/></p>
			<p>「生活很困難，我一天賺1千元，但一個月有零工的時間僅14、5天而已，」小寶的爸爸過去工作常面臨短缺，但因為小寶成績進步，讓他感受到全家的命運可以被翻轉。即使他身體有健康因素，也盡可能地外出工作，現居住的鄉鎮找不到工作，就再到另一個鄉鎮去找。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="貧窮的孩子沒出息嗎？只要給他們舞台就可以發揮得更好。" color="#FF4612" borderColor="#B5B5B5"/>
			<p><br/></p>
			<p><br/></p>
			<p>陳美如從事教育輔導工作超過20年，她認為，貧窮兒童缺乏物資，但也缺乏關懷陪伴，更缺乏舞台。她舉小寶為例，小寶舞蹈肢體不協調，選不上學校的舞蹈比賽，永遠只有在台下乾瞪眼的份，但兒少站幫這些弱勢兒童找舞台，參加社區的大型聯歡活動，讓每個孩子上台，一個人鼓掌就得到一份肯定。</p>
			<p><br/></p>
			<p>「他們不是壞孩子，是可以被培育成乖孩子、有成就的孩子。」陳美如說，表演時看著他們自動自發搬器材、互相打理儀容、幫對方綁鞋帶，「兒少站的孩子很多都單親，有的父母離婚、有的媽媽跑掉，更別說隔代教養，很多阿公、阿嬤也都不在了，被親戚收留，但他們都可以幫家人撐起這個家，就像小寶的樂觀進取，帶動家人轉動命運。」</p>
			<p><br/></p>
			<p><b>（編按：為保護個案隱私，個案都以化名、且隱匿相關地名與當事人姓名。）</b></p>
		</ContentContainer>
		<FixedBackground id="fixbg-3" text="台灣貧窮兒是貧窮老人的3倍" :src="pic9_mobile" :src-web="pic9_web"/>
		<div id="chart-contain">
			<p><br/></p>
			<div id="chart"></div>
			<div id="chart-say">資料來源：家扶基金會2015年弱勢兒少生活趨勢調查報告</div>
		</div>
		<ContentContainer background-color="#ECEAEA">
			<p>2015年台灣的貧富差距又創史上第二高，最有錢的前5%家庭跟最窮的後5%家庭，收入相差100倍以上。根據衛福部資料，低收與中低收入老人占總人口數5.89%，未滿12歲的貧窮兒童卻占有18.34%，人數是貧窮老人的三倍，台灣貧窮老人相對較少，貧窮困苦的年齡層集中在流沙中年，以及台灣的下一代、將近12萬個貧窮兒童。</p>
			<p><br/></p>
			<p>這些數字冷冰冰，但走一趟偏鄉的貨櫃屋、走一趟小寶的家，貧窮的苦境躍於眼前，<b>他們每天生活在惡劣的環境中，但他們卻落在社會安全網外。</b>住貨櫃屋的女孩戶籍紊亂，父親也沒法申請政府低收、中低收補助，而小寶即使居住的環境惡劣破舊、沒熱水，但仍屬於擁有「不動產」一族，更無法申請政府補助。</p>
			<p><br/></p>
			<p>他們都屬於「12萬貧童」之外的邊緣弱勢，也就是沒被納入低收與中低收入戶補助內。</p>
			<p><br/></p>
			<p>還有更多像他們一樣落在安全網外的孩子，<b>「你們住在台北可能不相信，這裡很多8、9歲的孩子為了吃一頓飯，每天要到同學家裡幫忙打掃、洗碗，賺零用錢。」</b>兒少站的課輔老師陳美如說，這些孩子都有家人，但是沒有人可以溫飽，每天上學的營養午餐是唯一正常的飯食。</p>
			<p><br/></p>
			<p>「隱藏性的高關懷兒童很多，」永齡希望小學成大分校社工督導黃慧菁說，不少農業縣市偏鄉資源相對少，弱勢兒童特徵很明顯，從家裡及周遭環境就能辨識。</p>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic10_mobile" width-web="880" height-web="580" :src-web="pic10_web" imgsay="有研究顯示，約半數的貧窮家戶會持續4年貧困，四分之一的家戶甚至超過8年以上都處於貧困狀態，無法脫貧。"/>
			<p><br/></p>
			<h2>隱性貧窮兒 不知玫瑰是什麼</h2>
			<p><br/></p>
			<p>尤其是都會區的貧窮兒童，表面上很難被辨識出來。黃慧菁說，隱性貧窮兒的雙親都有工作，天天疲於奔命、早出晚歸，但兩人努力合賺的收入不到上班族一個人的收入，孩子也因此常餓肚子又沒人照顧，下課後四處遊蕩。</p>
			<p><br/></p>
			<p>他們更欠缺文化刺激，住在市區卻沒聽過自強號、莒光號，遑論高鐵，連計算數學題，要他們數玫瑰花的數量，他們還問老師：「玫瑰花是什麼？」</p>
			<p><br/></p>
			<p>黃慧菁說，<b>他們多數無法進入低收、中低收入戶補助的社會安全網內，屬於邊緣弱勢兒，是社會夾層中的孩子。</b></p>
			<p><br/></p>
			<p>「台灣的社會安全網很難進入，」東吳大學教授李淑蓉說，以政府預算結構來看，用在貧窮的預算偏低。她分析，中央預算中有4773多億元放在社會福利，比教育、國防的預算還多，占最大宗。</p>
			<p><br/></p>
			<p>但這當中僅2.75%用在低收與中低收入戶的補助，「比去年還減少，但貧窮的人口在增加，補助卻減少？這說明什麼？」李淑蓉說，政府對於貧窮的補助仍不足夠，<b>應增加貧窮兒的生活津貼、單親媽媽需要的是托育津貼，以及就業與失業的協助，甚至減稅等都要納入社福政策考量。</b></p>
			<p><br/></p>
			<ImageContain width="720" height="580" :src="pic11_mobile" width-web="880" height-web="580" :src-web="pic11_web" imgsay="越來越多的孩子無法進入社會安全網，教育會是孩子脫貧的機會嗎？"/>
			<p><br/></p>
			<h2>近貧兒20年來增1倍 卻落在安全網外 </h2>
			<p><br/></p>
			<p>除了預算分配問題外，國內的資格定義、審查方式，甚至審查人員的價值觀，都會影響這些孩子能不能進入補助範圍。</p>
			<p><br/></p>
			<p>台師大教授王永慈分析，政府定義有工作能力是指「年滿18歲、懷孕生子若3歲以上」就是有工作能力，被認定可以工作，區公所看你好手好腳，並未符合沒有工作能力，社會救助法就會用基本工資來計算。</p>
			<p><br/></p>
			<p>再來是審查問題，進入實質審核時多採書面，因為案量過多，審查時很難透過家訪而得，因此前端誰來發現、誰來協助這些貧窮家戶提出申請變成重要關鍵人。王永慈分析，「審核人員的價值觀也會影響審查結果，他們怎麼看待不穩定就業，或失業這些事情？如何看待孩子有爸爸、媽媽卻還來申請補助？」</p>
			<p><br/></p>
			<p>台灣官方統計顯示，低收與中低收家戶數僅占總家戶數3%，但根據盧森堡所得研究中心（LIS）的資料，可以看出台灣兒童貧窮化的增加趨勢，<b>20年來近貧比率足足增加了一倍之多，但是台灣政府統計落入極度貧窮的比率卻沒有太大變動，顯示越來越多的兒童無法進入安全網的救助體系。</b></p>
			<p><br/></p>
			<p>此外，貧窮的成因也非常多元，戶長的年齡、性別以及家庭結構，都會影響兒童貧窮。家扶基金會社工處長周大堯根據經驗表示，扶助一個家庭至少要10年的時間，曾有四代同堂都是家扶個案。主因在於政府統計有黑數，許多父母工作貧窮、補助邊緣弱勢，最後造成孩子的貧窮。</p>
			<p><br/></p>
			<h2>負債問題 恐讓兒童陷入貧窮世襲命運</h2>
			<p><br/></p>
			<p>「超過半數的貧窮兒童，家裡都有負債問題，」台師大教授王永慈說，根據2013年低收與中低收入戶的生活狀況調查進一步分析，有18歲以下孩子的家庭中，<b>低收入戶有債務的家庭占一半以上，中低收入戶有債務的比率更高。</b></p>
			<p><br/></p>
			<p>換言之，貧窮線下的半數家庭都負債，這些孩子長大後仍要背負家人的債務，未來要如何翻身？</p>
			<p><br/></p>
			<p>「更嚴重的是，在孩子長大之前，家庭親職功能完全崩壞，」在偏鄉服務10年的永齡希望小學雲科分校督導楊淑媛說，這群被遺忘的孩子，多數失去家庭親人的關愛，很多父母親為了張羅生活，也分身乏術，協助建立孩子與其他人的聯結變得重要，「學校的課輔老師或是社工，或是<b>多一雙拉他們一把的手，都能變成孩子生命中的重要他人，他們才不會覺得自己被世界被社會拋棄。」</b></p>
			<p><br/></p>
			<p class="orange">《聯合報》將於10月4、5日，連續兩天刊出貧窮兒童系列報導，深入剖析貧窮世襲、邊緣弱勢以及社會安全網問題，邀請一同來關心台灣的孩子。</p>
			<p><br/></p>
			<p><br/></p>
			<Share href="https://udn.com/upf/newmedia/2017_data/poverty/index.html"/>
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
					<p>我們長大，把光亮帶回黑暗家鄉</p>
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
			<FBComment href="https://udn.com/upf/newmedia/2017_data/poverty/index.html" />
		</ContentContainer>
		<Foot background-color="#ECEAEA"/>
		<div id="back-contain">
			<canvas id="back" ></canvas>
			<div id="back-text">貨櫃屋裡滿是撿來的二手家具。</div>
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

import pic1_web from './assets/pic1.jpg'
import pic2_web from './assets/pic2.jpg'
import pic5_web from './assets/pic5.jpg'
import pic6_web from './assets/pic6.jpg'
import pic7_web from './assets/pic7.jpg'
import pic8_web from './assets/pic8.jpg'
import pic9_web from './assets/pic9.jpg'
import pic10_web from './assets/pic10.jpg'
import pic11_web from './assets/pic11.jpg'

import pic1_mobile from './assets/mobile/pic1.jpg'
import pic2_mobile from './assets/mobile/pic2.jpg'
import pic5_mobile from './assets/mobile/pic5.jpg'
import pic6_mobile from './assets/mobile/pic6.jpg'
import pic7_mobile from './assets/mobile/pic7.jpg'
import pic8_mobile from './assets/mobile/pic8.jpg'
import pic9_mobile from './assets/mobile/pic9.jpg'
import pic10_mobile from './assets/mobile/pic10.jpg'
import pic11_mobile from './assets/mobile/pic11.jpg'

import relate1 from './assets/relate1.jpg'
import relate2 from './assets/relate2.jpg'
import relate3 from './assets/relate3.jpg'
import relate4 from './assets/relate4.jpg'

export default {
	name: 'app',
	data: function(){
		return{
			pic1_web: pic1_web,
			pic2_web: pic2_web,
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
			relate1: relate1,
			relate2: relate2,
			relate3: relate3,
			relate4: relate4,
		}
	},
	components: {
		Indicator, HeadBar, Cover, ContentContainer, Share, FixedBackground, Quote, ImageContain, Editor, Logo, FBComment, Relate, Foot
	}
}
</script>

<style>
	
	video{
		width: 100%;
	}
	#app{
		overflow: hidden;
	}
</style>
