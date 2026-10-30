/* ===== SAMPLE DATA – DEMONSTRATION ONLY. Replace with approved content. =====
   Visibility rule (see script.js): a job is shown only if
   targetNationalities includes the site audience (ja => "Japanese", vi => "Vietnamese")
   AND displayLanguages includes the current language AND content[lang] exists AND status === "open".
   targetNationalities (who may apply) is independent of requiredLanguages (language skill). */
/* Default Apply link (Rikkei Japan recruitment Facebook page – confirm before publishing).
   A job's own applicationUrl overrides it. */
window.RJ_APPLY_URL = "https://m.me/rikkei.japan.hr";
window.RJ_JOBS = [
{id:"jp-se-01",category:"se",department:"Delivery",location:"Tokyo",employmentType:"fulltime",salaryMin:null,salaryMax:null,salaryUnit:"JPY/year",experienceLevel:"mid",
 requiredLanguages:[{lang:"Japanese",level:"Business"}],targetNationalities:["Japanese"],displayLanguages:["ja"],featured:true,status:"open",posted:"2026-10-20",applicationUrl:"",
 content:{ja:{title:"Javaバックエンドエンジニア",description:"国内顧客向け業務システムの設計・開発を担当します。",
 responsibilities:["要件定義〜設計・実装・テスト","ベトナム拠点のチームとの共同開発"],requirements:["Javaでの開発経験3年以上","日本語でのビジネスコミュニケーション"],preferred:["Spring Boot経験","クラウド環境での開発経験"],benefits:["待遇・福利厚生は確認後に掲載します（サンプル）"]}}},
{id:"jp-pm-01",category:"pm",department:"Delivery",location:"Tokyo",employmentType:"fulltime",salaryMin:null,salaryMax:null,salaryUnit:"JPY/year",experienceLevel:"senior",
 requiredLanguages:[{lang:"Japanese",level:"Native"}],targetNationalities:["Japanese"],displayLanguages:["ja"],featured:true,status:"open",posted:"2026-10-12",applicationUrl:"",
 content:{ja:{title:"プロジェクトマネージャー",description:"オフショア開発を含むITプロジェクトの推進を担います。",
 responsibilities:["進捗・品質・コストの管理","顧客およびベトナムチームとの調整"],requirements:["PMまたはPL経験5年以上"],preferred:["オフショア開発の管理経験"],benefits:["待遇・福利厚生は確認後に掲載します（サンプル）"]}}},
{id:"jp-sales-01",category:"sales",department:"Sales",location:"Osaka",employmentType:"fulltime",salaryMin:null,salaryMax:null,salaryUnit:"JPY/year",experienceLevel:"mid",
 requiredLanguages:[{lang:"Japanese",level:"Native"}],targetNationalities:["Japanese"],displayLanguages:["ja"],featured:false,status:"open",posted:"2026-09-30",applicationUrl:"",
 content:{ja:{title:"IT営業（法人向け）",description:"IT開発サービスの新規・既存顧客向け提案活動を行います。",
 responsibilities:["提案書の作成と商談","開発チームと連携した案件推進"],requirements:["法人営業経験3年以上"],preferred:["IT業界での営業経験"],benefits:["待遇・福利厚生は確認後に掲載します（サンプル）"]}}},
{id:"vn-brse-01",category:"brse",department:"Delivery",location:"Tokyo",employmentType:"fulltime",salaryMin:null,salaryMax:null,salaryUnit:"JPY/year",experienceLevel:"mid",
 requiredLanguages:[{lang:"Japanese",level:"N2"},{lang:"Vietnamese",level:"Native"}],targetNationalities:["Vietnamese"],displayLanguages:["vi"],featured:true,status:"open",posted:"2026-10-25",applicationUrl:"",
 content:{vi:{title:"BrSE – Kỹ sư cầu nối",description:"Làm cầu nối giữa khách hàng Nhật Bản và đội phát triển tại Việt Nam.",
 responsibilities:["Trao đổi yêu cầu với khách hàng bằng tiếng Nhật","Điều phối tiến độ và chất lượng với đội dev"],requirements:["Từ 3 năm kinh nghiệm BrSE hoặc dev","Tiếng Nhật tương đương N2 trở lên"],preferred:["Kinh nghiệm quản lý nhóm nhỏ"],benefits:["Chế độ đãi ngộ sẽ được cập nhật sau khi xác nhận (dữ liệu mẫu)"]}}},
{id:"vn-ai-01",category:"ai",department:"AI Lab",location:"Fukuoka",employmentType:"fulltime",salaryMin:null,salaryMax:null,salaryUnit:"JPY/year",experienceLevel:"mid",
 requiredLanguages:[{lang:"Japanese",level:"N3"}],targetNationalities:["Vietnamese"],displayLanguages:["vi"],featured:true,status:"open",posted:"2026-10-18",applicationUrl:"",
 content:{vi:{title:"Kỹ sư AI / Dữ liệu",description:"Xây dựng và triển khai giải pháp AI/ML cho khách hàng tại Nhật.",
 responsibilities:["Phát triển mô hình và pipeline dữ liệu","Đưa mô hình vào vận hành"],requirements:["Thành thạo Python","Kinh nghiệm dự án ML/Data"],preferred:["Kinh nghiệm MLOps"],benefits:["Chế độ đãi ngộ sẽ được cập nhật sau khi xác nhận (dữ liệu mẫu)"]}}},
{id:"vn-sap-01",category:"sap",department:"Enterprise",location:"Osaka",employmentType:"contract",salaryMin:null,salaryMax:null,salaryUnit:"JPY/year",experienceLevel:"senior",
 requiredLanguages:[{lang:"Japanese",level:"N2"}],targetNationalities:["Vietnamese"],displayLanguages:["vi"],featured:false,status:"open",posted:"2026-09-22",applicationUrl:"",
 content:{vi:{title:"Chuyên viên tư vấn SAP",description:"Tham gia triển khai và vận hành hệ thống SAP cho doanh nghiệp.",
 responsibilities:["Khảo sát yêu cầu, thiết kế cấu hình","Hỗ trợ kiểm thử và vận hành"],requirements:["Từ 5 năm kinh nghiệm SAP (FI/CO, MM hoặc SD)"],preferred:["Chứng chỉ SAP"],benefits:["Chế độ đãi ngộ sẽ được cập nhật sau khi xác nhận (dữ liệu mẫu)"]}}},
{id:"both-cloud-01",category:"cloud",department:"Infrastructure",location:"Tokyo",employmentType:"fulltime",salaryMin:null,salaryMax:null,salaryUnit:"JPY/year",experienceLevel:"mid",
 requiredLanguages:[{lang:"Japanese",level:"Business"}],targetNationalities:["Japanese","Vietnamese"],displayLanguages:["ja","vi"],featured:true,status:"open",posted:"2026-10-27",applicationUrl:"",
 content:{ja:{title:"クラウドインフラエンジニア",description:"AWS等を用いたインフラの設計・構築・運用を担当します。",
 responsibilities:["クラウド環境の設計・構築","運用自動化の推進"],requirements:["インフラ構築経験3年以上"],preferred:["Terraform経験"],benefits:["待遇・福利厚生は確認後に掲載します（サンプル）"]},
 vi:{title:"Kỹ sư Cloud / Hạ tầng",description:"Thiết kế, xây dựng và vận hành hạ tầng trên nền tảng cloud như AWS.",
 responsibilities:["Thiết kế và xây dựng môi trường cloud","Tự động hóa vận hành"],requirements:["Từ 3 năm kinh nghiệm hạ tầng"],preferred:["Có kinh nghiệm Terraform"],benefits:["Chế độ đãi ngộ sẽ được cập nhật sau khi xác nhận (dữ liệu mẫu)"]}}}
];
/* Sample news – replace with real posts */
window.RJ_NEWS = [
{date:"2026-10-15",cat:"event",ja:"キャリア説明会のお知らせ",vi:"Thông báo buổi giới thiệu cơ hội nghề nghiệp"},
{date:"2026-09-28",cat:"recruit",ja:"新しいポジションを公開しました",vi:"Đã mở thêm vị trí tuyển dụng mới"},
{date:"2026-09-05",cat:"company",ja:"チーム交流イベントを開催",vi:"Sự kiện giao lưu giữa các đội"}
];
