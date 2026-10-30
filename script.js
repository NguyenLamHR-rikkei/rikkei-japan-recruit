/* Rikkei Japan Career – vanilla JS, hash routing (#/, #/jobs, #/jobs/ID, #/about, #/culture, #/news) */
(function(){
'use strict';
var J=window.RJ_JOBS,NW=window.RJ_NEWS,$=function(s){return document.querySelector(s)};
var NAT={ja:'Japanese',vi:'Vietnamese'},lang='ja';
try{var s0=localStorage.getItem('rj-lang');if(s0==='vi'||s0==='ja')lang=s0}catch(e){}
var S={q:'',cat:'',loc:'',exp:'',type:'',sort:'new'};

/* ---------- UI text ---------- */
var I={
ja:{nav:['ホーム','求人情報','Rikkeiについて','キャリア＆カルチャー','ニュース'],cta:'求人を見る',c2:'Rikkei Japanを知る',
 sample:'表示中の求人・ニュース・写真はすべてサンプルです。公開前に差し替えてください。',
 h1:'技術で、未来をつくる。<br>人と、世界をつなぐ。',lead:'日本のお客様と、ベトナムをはじめとするグローバルチームをつなぐ。Rikkei Japanで、挑戦できるフィールドを見つけませんか。',
 ph:'写真プレースホルダー（承認済み素材と差し替え）',facts:[['2012','Rikkeisoft設立'],['2,200+','グループ従業員数'],['1,000+','プロジェクト実績'],['500+','取引顧客数']],
 factNote:'※会社提供情報。公開前に最新値の確認が必要です。',feat:'注目の求人',all:'求人一覧を見る',
 whyT:'Rikkei Japanで働くということ',why:[['国際チームでの協働','日本のお客様とベトナムのエンジニアが同じプロジェクトを進めます。'],['多様な技術領域','開発、BrSE、AI、SAP、クラウドなど、複数の領域で案件があります。'],['成長できる環境','専門性を深めるキャリアと、マネジメントに進むキャリアを検討できます。（制度の詳細は要確認）'],['オープンな関係','国や職種を越えて意見を交わせる職場づくりを目指しています。']],
 cultT:'キャリア＆カルチャー',cultP:'社員インタビュー、研修、イベントの写真は承認後に掲載します。',
 cult:[['社員インタビュー','現場で働く社員の声を掲載予定です。'],['研修・学習支援','成長を支える取り組みを紹介予定です。'],['イベント・チーム活動','交流イベントの様子を紹介予定です。'],['オフィス環境','働く環境の写真を掲載予定です。']],
 phS:'［未掲載］',aboutT:'Rikkeiについて',aboutP:['Rikkei Japanは、Rikkeisoftグループの日本拠点として、日本のお客様にITサービスを提供しています。','Rikkeisoftは2012年に設立され、ベトナム・日本・米国で事業を展開しています。'],
 vals:['信頼','協働','プロフェッショナルとしての成長','国際チームワーク'],valT:'大切にしていること',corp:'Rikkeisoft公式サイトへ',
 newsT:'ニュース＆イベント',cats:{se:'ソフトウェア開発',brse:'ブリッジSE（BrSE）',pm:'プロジェクト管理',ai:'AI／データ',sap:'SAP／Salesforce',cloud:'クラウド／インフラ',sales:'IT営業／事業開発',corp:'コーポレート／その他'},
 ncat:{event:'イベント',recruit:'採用情報',company:'会社情報'},finT:'あなたに合うポジションを探す',finP:'求人情報から、ご経験に合うポジションをご確認ください。',
 search:'キーワード',cat:'職種',loc:'勤務地',exp:'経験',type:'雇用形態',sort:'並び替え',sNew:'新着順',sRel:'関連度順',any:'指定なし',clear:'条件をクリア',
 count:function(n){return n+'件の求人'},empty:'条件に合う求人がありません。',emptyH:'キーワードや条件を変更してお試しください。',
 ex:{junior:'ジュニア',mid:'ミドル',senior:'シニア'},ty:{fulltime:'正社員',contract:'契約社員'},
 L:{Tokyo:'東京',Osaka:'大阪',Nagoya:'名古屋',Fukuoka:'福岡',Sapporo:'札幌',Sendai:'仙台'},lg:{Japanese:'日本語',Vietnamese:'ベトナム語',English:'英語'},nat:'応募対象',natn:{Japanese:'日本国籍の方',Vietnamese:'ベトナム国籍の方'},
 apply:'この求人に応募する',noUrl:'応募フォームは未設定です。採用担当の連絡先は後日掲載します（プレースホルダー）。',back:'求人一覧に戻る',related:'関連する求人',
 sum:'仕事内容',resp:'業務内容',req:'必須要件',pref:'歓迎要件',ben:'待遇・福利厚生',lang_:'語学要件',posted:'掲載日',sal:'給与',salTbd:'確認中',nf:'この求人は見つかりません。',
 foot:'Rikkei Japan Careerは試作サイトです。',contact:'お問い合わせ',contactP:'連絡先は後日掲載（プレースホルダー）',priv:'プライバシーポリシー（準備中）',copy:'© Rikkei Japan. 試作版。',menu:'メニュー'},
vi:{nav:['Trang chủ','Việc làm','Về Rikkei','Sự nghiệp & Văn hóa','Tin tức'],cta:'Xem việc làm',c2:'Tìm hiểu về Rikkei Japan',
 sample:'Việc làm, tin tức và hình ảnh đang hiển thị đều là dữ liệu mẫu. Vui lòng thay thế trước khi công bố.',
 h1:'Cùng kiến tạo tương lai bằng công nghệ.',lead:'Kết nối khách hàng Nhật Bản với đội ngũ kỹ sư toàn cầu. Hãy tìm vị trí phù hợp để phát triển sự nghiệp cùng Rikkei Japan.',
 ph:'Khung ảnh tạm (thay bằng ảnh đã được duyệt)',facts:[['2012','Rikkeisoft thành lập'],['2.200+','Nhân sự toàn tập đoàn'],['1.000+','Dự án đã triển khai'],['500+','Khách hàng']],
 factNote:'* Số liệu do công ty cung cấp, cần xác nhận lại trước khi công bố.',feat:'Việc làm nổi bật',all:'Xem tất cả việc làm',
 whyT:'Làm việc tại Rikkei Japan',why:[['Làm việc trong đội ngũ quốc tế','Khách hàng Nhật Bản và kỹ sư Việt Nam cùng thực hiện một dự án.'],['Nhiều mảng công nghệ','Phát triển phần mềm, BrSE, AI, SAP, cloud và nhiều lĩnh vực khác.'],['Môi trường để phát triển','Có thể đi sâu chuyên môn hoặc hướng tới quản lý. (Chính sách chi tiết cần xác nhận)'],['Cởi mở, hợp tác','Hướng tới nơi làm việc nơi mọi người trao đổi thẳng thắn, bất kể quốc tịch hay vị trí.']],
 cultT:'Sự nghiệp & Văn hóa',cultP:'Phỏng vấn nhân viên, đào tạo và sự kiện sẽ được đăng sau khi được duyệt.',
 cult:[['Phỏng vấn nhân viên','Sẽ đăng chia sẻ của nhân viên đang làm việc.'],['Đào tạo & học tập','Sẽ giới thiệu các hoạt động hỗ trợ phát triển.'],['Sự kiện & hoạt động nhóm','Sẽ giới thiệu các hoạt động giao lưu.'],['Môi trường làm việc','Sẽ đăng ảnh văn phòng và nơi làm việc.']],
 phS:'[Chưa có ảnh]',aboutT:'Về Rikkei',aboutP:['Rikkei Japan là chi nhánh tại Nhật Bản của tập đoàn Rikkeisoft, cung cấp dịch vụ CNTT cho khách hàng Nhật.','Rikkeisoft thành lập năm 2012 và hoạt động tại Việt Nam, Nhật Bản và Hoa Kỳ.'],
 vals:['Tin cậy','Hợp tác','Phát triển chuyên môn','Làm việc nhóm quốc tế'],valT:'Giá trị chúng tôi coi trọng',corp:'Đến website chính thức của Rikkeisoft (tiếng Nhật)',
 newsT:'Tin tức & Sự kiện',cats:{se:'Phát triển phần mềm',brse:'Kỹ sư cầu nối (BrSE)',pm:'Quản lý dự án',ai:'AI / Dữ liệu',sap:'SAP / Salesforce',cloud:'Cloud / Hạ tầng',sales:'Kinh doanh CNTT',corp:'Hành chính / Khác'},
 ncat:{event:'Sự kiện',recruit:'Tuyển dụng',company:'Công ty'},finT:'Tìm vị trí phù hợp với bạn',finP:'Xem danh sách việc làm để chọn vị trí hợp với kinh nghiệm của bạn.',
 search:'Từ khóa',cat:'Nhóm công việc',loc:'Địa điểm',exp:'Kinh nghiệm',type:'Hình thức',sort:'Sắp xếp',sNew:'Mới nhất',sRel:'Liên quan nhất',any:'Tất cả',clear:'Xóa bộ lọc',
 count:function(n){return n+' việc làm'},empty:'Không có việc làm nào phù hợp.',emptyH:'Hãy thử đổi từ khóa hoặc bộ lọc.',
 ex:{junior:'Junior',mid:'Middle',senior:'Senior'},ty:{fulltime:'Toàn thời gian',contract:'Hợp đồng'},
 L:{Tokyo:'Tokyo',Osaka:'Osaka',Nagoya:'Nagoya',Fukuoka:'Fukuoka',Sapporo:'Sapporo',Sendai:'Sendai'},lg:{Japanese:'Tiếng Nhật',Vietnamese:'Tiếng Việt',English:'Tiếng Anh'},nat:'Đối tượng ứng tuyển',natn:{Japanese:'Quốc tịch Nhật Bản',Vietnamese:'Quốc tịch Việt Nam'},
 apply:'Ứng tuyển vị trí này',noUrl:'Chưa có biểu mẫu ứng tuyển. Thông tin liên hệ của bộ phận tuyển dụng sẽ được bổ sung sau (placeholder).',back:'Quay lại danh sách',related:'Việc làm liên quan',
 sum:'Mô tả',resp:'Công việc',req:'Yêu cầu bắt buộc',pref:'Ưu tiên',ben:'Quyền lợi & điều kiện',lang_:'Yêu cầu ngôn ngữ',posted:'Ngày đăng',sal:'Mức lương',salTbd:'Đang xác nhận',nf:'Không tìm thấy việc làm này.',
 foot:'Rikkei Japan Career là website thử nghiệm.',contact:'Liên hệ',contactP:'Thông tin liên hệ sẽ được bổ sung (placeholder)',priv:'Chính sách bảo mật (đang chuẩn bị)',copy:'© Rikkei Japan. Bản thử nghiệm.',menu:'Menu'}};
var T=I[lang];

/* ---------- data access: the ONLY place job visibility is decided ---------- */
function vis(){return J.filter(function(j){return j.status==='open'&&j.targetNationalities.indexOf(NAT[lang])>-1&&j.displayLanguages.indexOf(lang)>-1&&j.content&&j.content[lang]})}
function find(id){return vis().filter(function(j){return j.id===id})[0]}
function filtered(){
 var q=S.q.trim().toLowerCase();
 var r=vis().filter(function(j){var c=j.content[lang];
  var hay=(c.title+' '+c.description+' '+c.requirements.join(' ')+' '+T.cats[j.category]).toLowerCase();
  return(!q||hay.indexOf(q)>-1)&&(!S.cat||j.category===S.cat)&&(!S.loc||j.location===S.loc)&&(!S.exp||j.experienceLevel===S.exp)&&(!S.type||j.employmentType===S.type)});
 var rel=function(j){return(q&&j.content[lang].title.toLowerCase().indexOf(q)>-1?2:0)+(j.featured?1:0)};
 return r.sort(S.sort==='rel'?function(a,b){return rel(b)-rel(a)||b.posted.localeCompare(a.posted)}:function(a,b){return b.posted.localeCompare(a.posted)});
}
var loc=function(j){return T.L[j.location]||j.location};
var sal=function(j){return j.salaryMin?(j.salaryMin+'–'+j.salaryMax+' '+j.salaryUnit):''};
function card(j){var c=j.content[lang];
 return '<a class="job" href="#/jobs/'+j.id+'"><span class="tag">'+T.cats[j.category]+'</span><h3>'+c.title+'</h3><p>'+c.description+'</p><ul class="meta"><li>'+loc(j)+'</li><li>'+T.ty[j.employmentType]+'</li><li>'+T.ex[j.experienceLevel]+'</li>'+(sal(j)?'<li>'+sal(j)+'</li>':'')+'</ul></a>'}
var ph=function(t,h,src){return '<div class="ph'+(h?' '+h:'')+'" role="img" aria-label="'+T.ph+'">'+(src?'<img src="assets/'+src+'" alt="" loading="lazy" onerror="this.remove()">':'')+'<span>'+(t||T.phS)+'</span></div>'};
var list=function(a){return '<ul>'+a.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>'};

/* ---------- views ---------- */
function home(){
 var f=vis().filter(function(j){return j.featured}).slice(0,3);
 return '<section class="hero"><div class="wrap hg"><div><p class="eyebrow">Rikkei Japan Career</p><h1>'+T.h1+'</h1><p class="lead">'+T.lead+'</p><p><a class="btn" href="#/jobs">'+T.cta+'</a> <a class="btn ghost" href="#/about">'+T.c2+'</a></p></div>'+ph(T.ph,'hp','hero.jpg')+'</div></section>'
 +'<section class="sec"><div class="wrap"><div class="facts">'+T.facts.map(function(x){return '<div><b>'+x[0]+'</b>'+x[1]+'</div>'}).join('')+'</div><p class="note">'+T.factNote+'</p></div></section>'
 +'<section class="sec alt"><div class="wrap"><div class="row"><h2>'+T.feat+'</h2><a class="btn ghost sm" href="#/jobs">'+T.all+'</a></div><div class="jobs">'+f.map(card).join('')+'</div></div></section>'
 +'<section class="sec"><div class="wrap"><h2>'+T.whyT+'</h2><div class="why">'+T.why.map(function(w){return '<div><h3>'+w[0]+'</h3><p>'+w[1]+'</p></div>'}).join('')+'</div></div></section>'
 +'<section class="sec alt"><div class="wrap"><div class="row"><h2>'+T.cultT+'</h2><a class="btn ghost sm" href="#/culture">'+T.nav[3]+'</a></div><p>'+T.cultP+'</p><div class="three">'+T.cult.slice(0,3).map(function(c,i){return '<div>'+ph('','','culture-'+(i+1)+'.jpg')+'<h3>'+c[0]+'</h3></div>'}).join('')+'</div></div></section>'
 +'<section class="sec"><div class="wrap"><div class="row"><h2>'+T.newsT+'</h2><a class="btn ghost sm" href="#/news">'+T.nav[4]+'</a></div>'+newsList()+'</div></section>'
 +'<section class="fin"><h2>'+T.finT+'</h2><p>'+T.finP+'</p><a class="btn" href="#/jobs">'+T.cta+'</a></section>';
}
function newsList(){return '<div>'+NW.map(function(n){return '<a class="job" style="margin-bottom:10px" href="#/jobs"><span class="tag">'+T.ncat[n.cat]+'</span> <span class="note">'+n.date+'</span><h3 style="margin:4px 0 0">'+n[lang]+'</h3></a>'}).join('')+'</div>'}
function sel(id,label,opts){return '<div><label for="'+id+'">'+label+'</label><select id="'+id+'"><option value="">'+T.any+'</option>'+opts.map(function(o){return '<option value="'+o[0]+'">'+o[1]+'</option>'}).join('')+'</select></div>'}
function uniq(k){var o=[];vis().forEach(function(j){if(o.indexOf(j[k])<0)o.push(j[k])});return o}
function jobs(){
 return '<div class="wrap sec"><h1>'+T.nav[1]+'</h1><form id="f" class="filters" role="search"><div><label for="q">'+T.search+'</label><input id="q" type="search"></div>'
 +sel('cat',T.cat,uniq('category').map(function(c){return [c,T.cats[c]]}))+sel('loc',T.loc,uniq('location').map(function(c){return [c,T.L[c]||c]}))
 +sel('exp',T.exp,uniq('experienceLevel').map(function(c){return [c,T.ex[c]]}))+sel('type',T.type,uniq('employmentType').map(function(c){return [c,T.ty[c]]}))
 +'<div><label for="sort">'+T.sort+'</label><select id="sort"><option value="new">'+T.sNew+'</option><option value="rel">'+T.sRel+'</option></select></div></form>'
 +'<div class="row"><p id="cnt" aria-live="polite" style="margin:0"></p><button type="button" class="btn ghost sm" data-clear>'+T.clear+'</button></div><div id="list" class="jobs" style="margin-top:16px"></div></div>';
}
function paint(){var r=filtered();$('#cnt').textContent=T.count(r.length);
 $('#list').innerHTML=r.length?r.map(card).join(''):'<div class="empty"><h3>'+T.empty+'</h3><p>'+T.emptyH+'</p><button type="button" class="btn sm" data-clear>'+T.clear+'</button></div>'}
function syncForm(){var f=$('#f');if(!f)return;$('#q').value=S.q;['cat','loc','exp','type','sort'].forEach(function(k){$('#'+k).value=S[k]})}
function detail(id){
 var j=find(id);if(!j)return '<div class="wrap sec"><p>'+T.nf+'</p><a class="btn" href="#/jobs">'+T.back+'</a></div>';
 var c=j.content[lang];
 var rel=vis().filter(function(x){return x.id!==j.id}).sort(function(a,b){return (b.category===j.category)-(a.category===j.category)}).slice(0,2);
 var u=j.applicationUrl||window.RJ_APPLY_URL,act=u?'<a class="btn" href="'+u+'" target="_blank" rel="noopener">'+T.apply+'</a>':'<button type="button" class="btn" data-apply>'+T.apply+'</button><p id="ap" class="note" hidden>'+T.noUrl+'</p>';
 return '<div class="wrap sec"><a class="crumb" href="#/jobs">← '+T.back+'</a><div class="dg"><article><span class="tag">'+T.cats[j.category]+'</span><h1>'+c.title+'</h1>'
 +'<h2>'+T.sum+'</h2><p>'+c.description+'</p><h2>'+T.resp+'</h2>'+list(c.responsibilities)+'<h2>'+T.req+'</h2>'+list(c.requirements)+'<h2>'+T.pref+'</h2>'+list(c.preferred)+'<h2>'+T.ben+'</h2>'+list(c.benefits)+'</article>'
 +'<aside class="side"><dl><dt>'+T.loc+'</dt><dd>'+loc(j)+'</dd><dt>'+T.cat+'</dt><dd>'+j.department+'</dd><dt>'+T.type+'</dt><dd>'+T.ty[j.employmentType]+'</dd><dt>'+T.exp+'</dt><dd>'+T.ex[j.experienceLevel]+'</dd><dt>'+T.sal+'</dt><dd>'+(sal(j)||T.salTbd)+'</dd>'
 +'<dt>'+T.lang_+'</dt><dd>'+j.requiredLanguages.map(function(r){return T.lg[r.lang]+' ('+r.level+')'}).join(', ')+'</dd><dt>'+T.posted+'</dt><dd>'+j.posted+'</dd></dl>'+act+'</aside></div>'
 +(rel.length?'<h2 style="margin-top:56px">'+T.related+'</h2><div class="jobs">'+rel.map(card).join('')+'</div>':'')+'</div>';
}
function about(){return '<div class="wrap sec"><h1>'+T.aboutT+'</h1>'+ph('','hp','about.jpg')+T.aboutP.map(function(p){return '<p>'+p+'</p>'}).join('')+'<h2>'+T.valT+'</h2>'+list(T.vals)+'<p><a class="btn" href="https://rikkeisoft.com/ja/" target="_blank" rel="noopener">'+T.corp+'</a></p><p><a class="btn ghost" href="#/jobs">'+T.cta+'</a></p></div>'}
function culture(){return '<div class="wrap sec"><h1>'+T.cultT+'</h1><p>'+T.cultP+'</p><div class="why">'+T.cult.map(function(c,i){return '<div>'+ph('','','culture-'+(i+1)+'.jpg')+'<h3 style="margin-top:12px">'+c[0]+'</h3><p>'+c[1]+'</p></div>'}).join('')+'</div></div>'}
function news(){return '<div class="wrap sec"><h1>'+T.newsT+'</h1>'+newsList()+'</div>'}

/* ---------- shell ---------- */
function shell(route){
 var h=['/','/jobs','/about','/culture','/news'];
 $('#hd').innerHTML='<div class="sample">'+T.sample+'</div><div class="wrap bar"><a class="brand" href="#/" aria-label="Rikkei Japan Career"><img class="logo" src="assets/logo.png" alt="Rikkei" onerror="rjLogo(this)"><small>Japan Career</small></a>'
 +'<button class="mb" type="button" data-menu aria-expanded="false">'+T.menu+'</button><nav aria-label="Main">'+T.nav.map(function(n,i){return '<a href="#'+h[i]+'"'+(route===h[i]?' aria-current="page"':'')+'>'+n+'</a>'}).join('')+'</nav>'
 +'<div class="lang" role="group" aria-label="Language"><button type="button" data-lang="ja" aria-pressed="'+(lang==='ja')+'">日本語</button><button type="button" data-lang="vi" aria-pressed="'+(lang==='vi')+'">Tiếng Việt</button></div><a class="btn sm" href="#/jobs">'+T.cta+'</a></div>';
 $('#ft').innerHTML='<div class="wrap fg"><div><b>Rikkei Japan Career</b><p>'+T.foot+'</p><a href="https://rikkeisoft.com/ja/" target="_blank" rel="noopener">rikkeisoft.com/ja</a></div><div>'+T.nav.map(function(n,i){return '<a href="#'+h[i]+'">'+n+'</a>'}).join('')+'</div><div><b>'+T.contact+'</b><p>'+T.contactP+'</p><span>'+T.priv+'</span></div></div><div class="wrap note" style="margin-top:24px">'+T.copy+'</div>';
}
function render(){
 T=I[lang];document.documentElement.lang=lang;
 var p=(location.hash.slice(1)||'/').split('/'),r='/'+(p[1]||''),html,route=r;
 if(r==='/jobs'&&p[2]){if(!find(p[2])){location.hash='#/jobs';return}html=detail(p[2]);route='/jobs'}
 else if(r==='/jobs')html=jobs();else if(r==='/about')html=about();else if(r==='/culture')html=culture();else if(r==='/news')html=news();else{html=home();route='/'}
 shell(route);$('#main').innerHTML=html;
 if(route==='/jobs'&&!p[2]){syncForm();paint()}
 document.title=({'/':'Rikkei Japan Career','/jobs':T.nav[1],'/about':T.nav[2],'/culture':T.nav[3],'/news':T.nav[4]}[route])+(route==='/'?'':' | Rikkei Japan Career');
}
window.addEventListener('hashchange',function(){render();window.scrollTo(0,0)});
document.addEventListener('click',function(e){
 var t=e.target.closest('[data-lang],[data-menu],[data-apply],[data-clear]');if(!t)return;
 if(t.hasAttribute('data-lang')){lang=t.getAttribute('data-lang');try{localStorage.setItem('rj-lang',lang)}catch(x){}render()}
 else if(t.hasAttribute('data-menu')){var h=$('#hd');h.classList.toggle('open');t.setAttribute('aria-expanded',h.classList.contains('open'))}
 else if(t.hasAttribute('data-apply')){$('#ap').hidden=false}
 else{S={q:'',cat:'',loc:'',exp:'',type:'',sort:'new'};syncForm();paint()}
});
document.addEventListener('input',function(e){var id=e.target.id;if(id&&S.hasOwnProperty(id)&&e.target.closest('#f')){S[id]=e.target.value;paint()}});
document.addEventListener('change',function(e){var id=e.target.id;if(id&&S.hasOwnProperty(id)&&e.target.closest('#f')){S[id]=e.target.value;paint()}});
window.rjLogo=function(el){el.outerHTML='<i></i>RIKKEI'};
render();
})();
