/* VRT 行政／人資 重大法規與通知（不含個資）— PSJHR「法規與重大通知」頁 + AC_ADMIN_CENTER 每日私訊提醒共用同一份。
   topics[].items[]：d＝生效日（或通知日），st＝'now' 目前有效｜'up' 即將生效｜'hist' 歷史；舊的改成 hist 保留，不刪。
   events[]：要提醒 Paul 的日期（生效日、截止日），14 天前、7 天前各私訊一次。 */
(function(g){
var R={updated:'2026-11-24',
topics:[
 {k:'minwage',ic:'💵',t:['法定最低工資（成衣業）','Minimum wage (garment sector)'],items:[
  {d:'2027-01-01',st:'up',t:['2027：正式工 212／試用期 210 美元','2027: regular US$212 / probation US$210'],b:[['+2 美元（+0.95%）；2026-10-07 已報台北：既有人員職務未變只加底薪 +2。','+US$2 (+0.95%); reported to Taipei 2026-10-07: unchanged roles get only the +2 base.'],['Payroll、合約範本、招工薪資表、系統 Basic Wage 要在 12 月前切換。','Payroll, contract template, recruitment pay sheet and system basic wage must switch before December.']],src:'2026-10-07 VRT 2027 最低工資調整 Review'},
  {d:'2026-01-01',st:'now',t:['2026：正式工 210／試用期 208 美元','2026: regular US$210 / probation US$208'],b:[['+2 美元（+0.96%）。','+US$2 (+0.96%).']],src:'Prakas on Minimum Wage 2026'},
  {d:'2025-01-01',st:'hist',t:['2025：208／206 美元','2025: US$208 / 206'],b:[['Prakas 211。','Prakas 211.']],src:'Prakas 211 (2024-10)'},
  {d:'2024-01-01',st:'hist',t:['2024：204／202 美元','2024: US$204 / 202'],b:[],src:'MLVT Notification 2024 minimum wage'},
  {d:'2023-01-01',st:'hist',t:['2023：200／198 美元','2023: US$200 / 198'],b:[],src:'AM141 Prakas on Minimum Wage 2023'},
  {d:'2022-01-01',st:'hist',t:['2022：194 美元','2022: US$194'],b:[],src:'AM132 Prakas 264'},
  {d:'2021-01-01',st:'hist',t:['2021：192 美元','2021: US$192'],b:[],src:''},
  {d:'2020-01-01',st:'hist',t:['2020：190 美元','2020: US$190'],b:[],src:''},
  {d:'2019-01-01',st:'hist',t:['2019：182 美元','2019: US$182'],b:[],src:''},
  {d:'2018-01-01',st:'hist',t:['2018：170 美元','2018: US$170'],b:[],src:''}]},
 {k:'nssf',ic:'🏦',t:['NSSF 社會保障（醫療＋職業風險）','NSSF (health care + occupational risk)'],items:[
  {d:'2026-11-01',st:'now',t:['繳費工資上下限調整：60 萬～150 萬瑞爾','Contributory wage band KHR 600k – 1.5M'],b:[['NSSF 通知 3135/26（2026-10-28），依部際部長令 234/26（2026-10-19）：下限 40 萬 → 60 萬、上限 120 萬 → 150 萬瑞爾；自 2026 年 11 月繳費月起算。','NSSF notice 3135/26 (28 Oct 2026) under inter-ministerial Prakas 234/26: floor KHR 400k → 600k, ceiling 1.2M → 1.5M, from the November 2026 contribution month.'],['費率不變：職業風險 0.8%＋醫療 2.6%＋退休金 2%＋2%＝7.4%。','Rates unchanged: 0.8% risk + 2.6% health + 2% + 2% pension = 7.4%.'],['VRT 96% 員工受影響；以 9 月 493 人計，每月 10,372 → 12,201 美元（+1,829，+17.6%）。目前員工 2% 由公司代付，是否繼續由管理層決定。','96% of VRT staff affected; at 493 staff monthly cost US$10,372 → 12,201 (+1,829, +17.6%). VRT currently pays the employee 2% — management to decide whether to continue.'],['HRA-PAY NSSF 參數 11 月起改 600,000／1,500,000，10 月以前不回溯；11 月清冊新舊對照、抽樣核對 NSSF 系統再申報。','HRA-PAY NSSF band set to 600,000 / 1,500,000 from November (no back-dating); November list compares old / new base and is spot-checked against the NSSF system before filing.']],src:'2026-10-30 NSSF 繳費工資上下限調整報告'},
  {d:'2022-10-01',st:'hist',t:['退休金開辦後基數：40 萬～120 萬瑞爾','Band after pension start: KHR 400k – 1.2M'],b:[['醫療＋職業風險 3.4% 由公司全額負擔（舊基數 50～300 美元）。','Health + risk 3.4% fully paid by the employer (old base US$50–300).']],src:'2022-08-15 NSSF 養老金說明'}]},
 {k:'pension',ic:'👴',t:['NSSF 退休金（養老金）','NSSF pension'],items:[
  {d:'2027-10-01',st:'up',t:['第二階段：4% → 8%（公司 4%＋員工 4%）— 預估','Phase 2: 4% → 8% (4% + 4%) — expected'],b:[['依制度分階段推估，正式時程以官方公告為準；以 2026-09 人數估每月再增約 6,555 美元。','Projected from the phased scheme; await the official notice. At Sep-2026 headcount about +US$6,555 a month.'],['2027 預算要同時納入新上下限與這一步。','2027 budget must include both the new band and this step.']],src:'2026-10-30 NSSF 報告；Prakas 170'},
  {d:'2022-10-01',st:'now',t:['第一階段：4%（公司 2%＋員工 2%），2022-10 起','Phase 1: 4% (2% + 2%) from Oct 2022'],b:[['Prakas 170：2022 年 10 月起扣繳，11/10 發 10 月薪時正式實施。','Prakas 170: deductions from October 2022, first on the 10 Nov payroll.'],['階段：2022-10～2027-09 4%｜2027-10～2032-09 8%｜2032-10～2042-09 10.75%｜之後每 10 年 +2.75%。','Phases: Oct 2022–Sep 2027 4% | Oct 2027–Sep 2032 8% | Oct 2032–Sep 2042 10.75% | then +2.75% every 10 years.'],['給付：養老金（60 歲、繳滿 12 個月）、傷殘、喪葬、遺屬撫恤。','Benefits: old-age (age 60, 12 months paid), invalidity, funeral, survivors.'],['宣導：7/15、7/29 GMAC 研討會；8/16 勞工部研討會；8/20 對組長／工代說明；8/27 NSSF 到廠宣導。','Rollout: GMAC workshops 15 & 29 Jul; MLVT workshop 16 Aug; briefing for leaders / reps 20 Aug; NSSF briefing at the factory 27 Aug.']],src:'Prakas 170；2022-08-15／08-29 NSSF 養老金說明'}]},
 {k:'seniority',ic:'🧾',t:['工齡津貼（年資）','Seniority indemnity'],items:[
  {d:'2021-01-21',st:'now',t:['每年 15 天，每 6 個月發 7.5 天（6 月、12 月）','15 days a year, paid 7.5 days every 6 months (Jun & Dec)'],b:[['勞工部公文 003/21：UDC 無固定期限員工適用；2019 年前工齡追溯分季度發放（2016–2017：2021 年 3、9 月；2018：2021 年 6 月）。','MLVT letter 003/21: applies to UDC staff; back pay for years before 2019 paid by quarter (2016–2017 in Mar & Sep 2021; 2018 in Jun 2021).'],['計算：平均總薪資 ÷ 26 × 7.5 天。','Formula: average total wage ÷ 26 × 7.5 days.']],src:'2021-01-21 工齡工資追溯及發放公告'},
  {d:'2019-06-01',st:'hist',t:['2019 勞工法修訂：工齡津貼改年度發放','2019 Labour Law amendment: annual seniority payment'],b:[['2019 年 6 月起依新規開始發放，並宣導會說明。','Payments started under the new rule from June 2019, with a dissemination workshop.']],src:'Report on Dissemination Workshop on Seniority Indemnity Payment (2019)'}]},
 {k:'termination',ic:'📄',t:['合同終止賠償','Contract termination compensation'],items:[
  {d:'2024-03-26',st:'now',t:['FDC 期滿 5% 遣散費＋無正當理由解約另加精神賠償','FDC 5% severance + moral damages for unjustified termination'],b:[['勞工法第 73 條：有期限合同期滿付合約期間工資 5%。','Art. 73: FDC end pays 5% of wages over the contract.'],['第 89 條：工齡津貼每年 15 天、每 6 個月發一半；1–6 個月年資解約付 7 天。','Art. 89: seniority 15 days a year, half every 6 months; 1–6 months service → 7 days on termination.'],['第 91 條：一方無正當理由終止，另一方可要求精神賠償（約等於工齡津貼）。','Art. 91: unjustified termination → moral damages (about equal to seniority pay).'],['解除 FDC／UDC 前先確認照勞工法程序，避免多付。','Check the Labour Law procedure before ending any FDC / UDC.']],src:'TAFTAC 2024-03-26；2024-04-06 呈台北比對說明'}]},
 {k:'allowance',ic:'🚌',t:['交通／住宿津貼','Transport / housing allowance'],items:[
  {d:'2026-04-01',st:'now',t:['7 美元＋臨時 2.5 美元＝9.5 美元','US$7 + temporary US$2.50 = US$9.50'],b:[['勞工部告知：照原本交通津貼方式計算，直到政府公告停止；2027 繼續，獨立 pay code。','Per MLVT: calculated like the existing allowance until the government ends it; continues in 2027 as its own pay code.']],src:'2026-04-07 交通津貼 4/1 開始實施'},
  {d:'2012-01-01',st:'hist',t:['通告 230/12：未提供交通或住宿，每月至少 7 美元','Notice 230/12: at least US$7 a month if no transport / housing'],b:[['首次發薪前工作 ≤13 天付 3.5 美元，≥14 天付 7 美元。','First pay: ≤13 days worked → US$3.50; ≥14 days → US$7.']],src:'通告 230/12'}]},
 {k:'tax',ic:'💸',t:['薪資稅','Salary tax'],items:[
  {d:'2023-01-01',st:'now',t:['2023 起級距：0／5／10／15／20%','From 2023: 0 / 5 / 10 / 15 / 20%'],b:[['0–150 萬瑞爾 0%｜150–200 萬 5%｜200–850 萬 10%｜850–1,250 萬 15%｜1,250 萬以上 20%。','KHR 0–1.5M 0% | 1.5–2M 5% | 2–8.5M 10% | 8.5–12.5M 15% | over 12.5M 20%.']],src:'2026-04-07 薪資計算項目更新'},
  {d:'2021-10-04',st:'hist',t:['薪資稅／福利稅／外國稅收抵免摘要','Salary / fringe-benefit tax / foreign tax credit summary'],b:[],src:'2021-10-04、2022-10-08 呈台北'}]},
 {k:'lsd',ic:'🔎',t:['勞動監察自我申報（自動化系統）','Labour inspection self-declaration'],items:[
  {d:'2026-12-01',st:'up',t:['每年 6 月、12 月各申報一次','Twice a year: June and December'],b:[['TAFTAC 每次發通知（如 018/25、035/25）；人事在系統完成並截圖存檔。','TAFTAC sends a notice each round (e.g. 018/25, 035/25); HR files in the system and keeps a screenshot.']],src:'TAFTAC Notification 035 (2025-12)'},
  {d:'2022-06-01',st:'hist',t:['2022 開始實施（通知 022）','Started 2022 (Notification 022)'],b:[],src:'AM075 Notification 022'}]},
 {k:'misti',ic:'🏭',t:['工業部每月生產報告','MISTI monthly production report'],items:[
  {d:'2025-12-01',st:'now',t:['每月向工業部提交生產報告（通知 4563）','Monthly production report to MISTI (Notification 4563)'],b:[['2025-12 起，已轉台北備查。','From Dec 2025; forwarded to Taipei.']],src:'Notification 4563'}]},
 {k:'cycle',ic:'🔁',t:['定期證照與檢查（行事曆會自動提醒）','Recurring certificates & checks (calendar reminders)'],items:[
  {d:'2026-12-03',st:'up',t:['跨部會工業聯合檢查（每 2 年）','Inter-ministerial industrial inspection (every 2 years)'],b:[['勞工＋工業＋環境（Joint Prakas 073/20）。','Labour + industry + environment (Joint Prakas 073/20).']],src:'2026-11-13 通知'},
  {d:'2027-03-15',st:'up',t:['員工健檢（2021 起每 2 年）— 預估','Worker health check (every 2 years since 2021) — estimated'],b:[['10 美元／人（5 診所＋5 勞工部）；外籍健康證明每年另辦。','US$10 per person (5 clinic + 5 MLVT); expat health certificates yearly.']],src:'2025-04-29 健檢更新'},
  {d:'2026-01-10',st:'now',t:['消防證書（2024 起每 2 年更新）','Fire certificate (renew every 2 years since 2024)'],b:[['上次 2024-01-10 生效；驗廠和勞工部都會查。','Last effective 2024-01-10; checked by audits and MLVT.']],src:'2025-10-31 消防證書更新'}]}
],
events:[
 {id:'mw-2027-switch',d:'2026-12-01',zh:'2027 最低工資：Payroll／合約／系統 Basic Wage 切換到 212／210',en:'2027 minimum wage: switch payroll / contracts / system basic wage to 212 / 210'},
 {id:'nssf-nov-file',d:'2026-12-10',zh:'NSSF 新上下限第一次申報（11 月份，60 萬／150 萬瑞爾）— 申報前先抽樣核對',en:'First NSSF filing with the new band (November) — spot-check before filing'},
 {id:'pension-2027-budget',d:'2027-09-01',zh:'退休金 8% 前一個月：確認官方公告、HRA-PAY 費率與預算',en:'One month before pension 8%: confirm official notice, HRA-PAY rate and budget'},
 {id:'sal-2028-review',d:'2027-10-01',zh:'2028 最低工資公告與年度調薪 Review（每年 10 月）',en:'2028 minimum wage notice & annual salary review (every October)'}
]};
g.VRT_REGS=R;
})(typeof window!=='undefined'?window:this);
