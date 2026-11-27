/* 常識類題庫 追加包（2026-11-26 夜間）：歷史、天文與自然科學、食品與飲食、居家與家具、驗廠。
   每一類是自己獨立的一份測驗（不混類）；題目加進該類「第 1 回」，滿 60 題就自動開「第 2 回」。
   之後每晚的新題目可以照這個檔的寫法：ADD('類別', [題目...])。 */
window.QUIZ_V2 = window.QUIZ_V2 || [];
(function () {
  const T3 = (zh, en, km) => [zh, en, km];
  const mc = (q, o, a, ex) => ({ t: 'mc', q, o, a, ex });
  const tf = (q, a, ex) => ({ t: 'tf', q, a: a ? 0 : 1, ex });
  const META = {
    history: ['📜', "歷史", "History", "ប្រវត្តិសាស្ត្រ"],
    astro: ['🔭', "天文與自然科學", "Astronomy & science", "តារាសាស្ត្រ និងវិទ្យាសាស្ត្រ"],
    food: ['🍜', "食品與飲食", "Food", "អាហារ"],
    home: ['🛋️', "居家與家具", "Home & furniture", "ផ្ទះ និងគ្រឿងសង្ហារិម"],
    audit: ['🏭', "驗廠", "Factory audits", "សវនកម្មរោងចក្រ"],
    bio: ['🧬', "人體與生物", "Human body & biology", "រាងកាយ និងជីវវិទ្យា"],
    mgmt: ['🧭', "管理領導", "Management", "ការគ្រប់គ្រង"],
    finance: ['💰', "薪資計算（柬埔寨勞動法）", "Payroll (Cambodian labour law)", "ការគណនាប្រាក់ឈ្នួល (ច្បាប់ការងារកម្ពុជា)"],
    compliance: ['🛡️', "CTPAT 反恐供應鏈安全", "CTPAT supply-chain security", "CTPAT សន្តិសុខខ្សែសង្វាក់ផ្គត់ផ្គង់"],
    hr: ['👥', "人資知識", "HR knowledge", "ចំណេះដឹងធនធានមនុស្ស"],
    safety: ['⛑️', "安全衛生", "Safety & health", "សុវត្ថិភាព និងសុខភាព"],
    lean: ['🏭', "精實生產與 5S", "Lean production & 5S", "ផលិតកម្មស្លីម និង 5S"]
  };
  const KMN = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  const kmNum = n => String(n).split('').map(d => KMN[+d]).join('');
  /* ser（選填）：同一類裡再分系列，例如語言類的「英文 基礎」「日文 入門」各自成卷：{key:'eng1', icon:'🔤', name:[中,英,柬], min, pass} */
  function test(cat, n, ser) {
    const id = (ser ? ser.key + '_' : cat) + n; let t = window.QUIZ_V2.find(x => x.id === id);
    if (!t) {
      const m = ser ? [ser.icon].concat(ser.name) : (META[cat] || ['📘', cat, cat, cat]);
      t = { id, cat, kind: 'score', icon: m[0], min: 60, pass: 60, target: 60,
        title: [m[1] + " 第 " + n + " 回", m[2] + " #" + n, m[3] + " លើកទី " + kmNum(n)],
        intro: ["本類第 " + n + " 回，題庫建置中（每晚增加，目標 60 題、60 分鐘）。60 分及格，交卷後每題都有詳細解答。",
                "Round " + n + " of this category; more items are added every night (target 60 items, 60 minutes). Pass mark 60; every item has a detailed explanation.",
                "លើកទី " + kmNum(n) + " នៃប្រភេទនេះ កំពុងបន្ថែមសំណួររៀងរាល់យប់ (គោលដៅ ៦០ សំណួរ ៦០ នាទី)។ ពិន្ទុជាប់ ៦០ សំណួរនីមួយៗមានការពន្យល់លម្អិត។"],
        q: [] };
      window.QUIZ_V2.push(t);
    }
    return t;
  }
  /* 加題：放進該類最新一回，滿 60 題就開下一回 */
  function ADD(cat, items, ser) {
    items.forEach(it => { let n = 1, t = test(cat, n, ser); while (t.q.length >= (t.target || 60)) t = test(cat, ++n, ser); if (ser && ser.pass) t.pass = ser.pass; t.q.push(it); });
  }
  window.QUIZ_ADD = ADD;

  ADD('history', [
    mc(T3("吳哥窟（Angkor Wat）主要是哪一位國王下令興建的？", "Which king ordered the construction of Angkor Wat?", "តើស្តេចអង្គណាបានបញ្ជាឱ្យសាងសង់ប្រាសាទអង្គរវត្ត?"),
      [T3("闍耶跋摩七世", "Jayavarman VII", "ព្រះបាទជ័យវរ្ម័នទី៧"), T3("蘇利耶跋摩二世", "Suryavarman II", "ព្រះបាទសូរ្យវរ្ម័នទី២"), T3("闍耶跋摩二世", "Jayavarman II", "ព្រះបាទជ័យវរ្ម័នទី២"), T3("因陀羅跋摩一世", "Indravarman I", "ព្រះបាទឥន្ទ្រវរ្ម័នទី១")], 1,
      T3("吳哥窟建於 12 世紀前半，由蘇利耶跋摩二世興建，原本供奉印度教毗濕奴神。闍耶跋摩七世後來建了吳哥城和巴戎寺；闍耶跋摩二世在 802 年建立吳哥王朝。",
         "Angkor Wat was built in the first half of the 12th century under Suryavarman II and was first dedicated to the Hindu god Vishnu. Jayavarman VII later built Angkor Thom and the Bayon; Jayavarman II founded the Angkor empire in 802.",
         "ប្រាសាទអង្គរវត្តសាងសង់នៅពាក់កណ្តាលដំបូងនៃសតវត្សទី១២ ក្រោមរជ្ជកាលព្រះបាទសូរ្យវរ្ម័នទី២ ហើយដំបូងឧទ្ទិសដល់ព្រះវិស្ណុក្នុងសាសនាហិណ្ឌូ។ ព្រះបាទជ័យវរ្ម័នទី៧ បានសាងសង់អង្គរធំ និងប្រាសាទបាយ័នក្រោយមក ឯព្រះបាទជ័យវរ្ម័នទី២ បានបង្កើតអាណាចក្រអង្គរនៅឆ្នាំ ៨០២។")),
    mc(T3("柬埔寨在哪一年脫離法國獨立？", "In which year did Cambodia gain independence from France?", "តើកម្ពុជាទទួលបានឯករាជ្យពីបារាំងនៅឆ្នាំណា?"),
      ["1945", "1953", "1963", "1975"], 1,
      T3("1953 年 11 月 9 日柬埔寨正式獨立，這天是國定的獨立紀念日；獨立紀念碑就在金邊市中心。",
         "Cambodia became fully independent on 9 November 1953, now celebrated as Independence Day; the Independence Monument stands in central Phnom Penh.",
         "កម្ពុជាទទួលបានឯករាជ្យពេញលេញនៅថ្ងៃទី ៩ ខែវិច្ឆិកា ឆ្នាំ ១៩៥៣ ដែលសព្វថ្ងៃជាទិវាបុណ្យឯករាជ្យជាតិ។ វិមានឯករាជ្យស្ថិតនៅកណ្តាលទីក្រុងភ្នំពេញ។")),
    mc(T3("第二次世界大戰在哪一年結束？", "In which year did World War II end?", "តើសង្គ្រាមលោកលើកទីពីរបានបញ្ចប់នៅឆ្នាំណា?"),
      ["1918", "1939", "1945", "1950"], 2,
      T3("二戰 1939 年開始，1945 年結束：德國 5 月投降，日本 8 月宣布投降、9 月 2 日簽降書。1918 年是第一次世界大戰結束。",
         "WWII began in 1939 and ended in 1945: Germany surrendered in May, Japan announced surrender in August and signed on 2 September. 1918 is the end of World War I.",
         "សង្គ្រាមលោកលើកទីពីរចាប់ផ្តើមឆ្នាំ ១៩៣៩ និងបញ្ចប់ឆ្នាំ ១៩៤៥៖ អាល្លឺម៉ង់ចុះចាញ់ខែឧសភា ជប៉ុនប្រកាសចុះចាញ់ខែសីហា ហើយចុះហត្ថលេខានៅថ្ងៃទី ២ កញ្ញា។ ឆ្នាំ ១៩១៨ ជាការបញ្ចប់សង្គ្រាមលោកលើកទីមួយ។")),
    mc(T3("第一個踏上月球的人是誰？", "Who was the first person to walk on the Moon?", "តើនរណាជាមនុស្សដំបូងគេដែលដើរលើព្រះច័ន្ទ?"),
      [T3("尤里・加加林", "Yuri Gagarin", "យូរី ហ្គាហ្គារីន"), T3("巴茲・艾德林", "Buzz Aldrin", "បាស អាល់ឌ្រីន"), T3("尼爾・阿姆斯壯", "Neil Armstrong", "នីល អាមស្ត្រង"), T3("約翰・葛倫", "John Glenn", "ចន ហ្គ្លេន")], 2,
      T3("1969 年 7 月 20 日阿波羅 11 號登月，阿姆斯壯先踏出艙門，艾德林第二。加加林是 1961 年第一個上太空的人，但沒有登月。",
         "Apollo 11 landed on 20 July 1969; Armstrong stepped out first and Aldrin second. Gagarin was the first human in space (1961) but never went to the Moon.",
         "យានអាប៉ូឡូ ១១ ចុះចតនៅថ្ងៃទី ២០ កក្កដា ១៩៦៩។ អាមស្ត្រងបោះជំហានចេញមុនគេ អាល់ឌ្រីនទីពីរ។ ហ្គាហ្គារីនជាមនុស្សដំបូងគេដែលហោះទៅអវកាស (១៩៦១) ប៉ុន្តែមិនបានទៅព្រះច័ន្ទទេ។")),
    mc(T3("大約 1450 年前後在歐洲發明金屬活字印刷機的人是？", "Who developed the metal movable-type printing press in Europe around 1450?", "តើនរណាបានបង្កើតម៉ាស៊ីនបោះពុម្ពអក្សរដែកចល័តនៅអឺរ៉ុបប្រហែលឆ្នាំ ១៤៥០?"),
      [T3("古騰堡", "Johannes Gutenberg", "យ៉ូហាន់ ហ្គូតិនប៊ឺក"), T3("達文西", "Leonardo da Vinci", "លេអូណាដូ ដាវ៉ាំងស៊ី"), T3("伽利略", "Galileo Galilei", "កាលីលេ"), T3("牛頓", "Isaac Newton", "អ៊ីសាក់ ញូតុន")], 0,
      T3("德國的古騰堡大約 1440–1450 年做出金屬活字印刷機，印出著名的《古騰堡聖經》，讓書本變便宜、知識快速傳播。中國更早就有畢昇的泥活字（11 世紀）。",
         "Germany's Johannes Gutenberg built his metal movable-type press around 1440–1450 and printed the famous Gutenberg Bible, making books cheaper and spreading knowledge fast. China had Bi Sheng's clay movable type much earlier (11th century).",
         "យ៉ូហាន់ ហ្គូតិនប៊ឺក ជនជាតិអាល្លឺម៉ង់ បានបង្កើតម៉ាស៊ីនបោះពុម្ពអក្សរដែកចល័តប្រហែលឆ្នាំ ១៤៤០–១៤៥០ ហើយបោះពុម្ពព្រះគម្ពីរហ្គូតិនប៊ឺក ធ្វើឱ្យសៀវភៅថោក និងចំណេះដឹងរីករាលដាលលឿន។ ប្រទេសចិនមានអក្សរដីឥដ្ឋចល័តរបស់ ប៊ី សេង តាំងពីសតវត្សទី១១។")),
    mc(T3("柏林圍牆在哪一年倒下？", "In which year did the Berlin Wall fall?", "តើជញ្ជាំងប៊ែកឡាំងបានដួលរលំនៅឆ្នាំណា?"),
      ["1961", "1979", "1989", "1999"], 2,
      T3("柏林圍牆 1961 年建起，1989 年 11 月 9 日開放、被民眾拆除；隔年 1990 年 10 月 3 日東西德統一。",
         "The Berlin Wall went up in 1961 and opened on 9 November 1989, when people began tearing it down; Germany reunified on 3 October 1990.",
         "ជញ្ជាំងប៊ែកឡាំងសាងសង់ឆ្នាំ ១៩៦១ ហើយបើកនៅថ្ងៃទី ៩ វិច្ឆិកា ១៩៨៩ ពេលប្រជាជនចាប់ផ្តើមរុះវា។ អាល្លឺម៉ង់បង្រួបបង្រួមឡើងវិញនៅថ្ងៃទី ៣ តុលា ១៩៩០។")),
    tf(T3("埃及吉薩的「大金字塔」是為法老古夫（Khufu）建造的陵墓。", "The Great Pyramid of Giza in Egypt was built as a tomb for Pharaoh Khufu.", "ពីរ៉ាមីតធំនៅហ្គីហ្សា ប្រទេសអេហ្ស៊ីប ត្រូវបានសាងសង់ជាផ្នូររបស់ផារ៉ោន ឃូហ្វូ។"), true,
      T3("對。大金字塔約在西元前 2560 年左右完成，是古夫法老的陵墓，原高約 146 公尺，是古代世界七大奇蹟中唯一留存到今天的。",
         "True. Finished around 2560 BC as Pharaoh Khufu's tomb, it was originally about 146 m tall and is the only one of the Seven Wonders of the Ancient World still standing.",
         "ត្រូវ។ វាសាងសង់រួចប្រហែលឆ្នាំ ២៥៦០ មុនគ.ស. ជាផ្នូររបស់ផារ៉ោនឃូហ្វូ មានកម្ពស់ដើមប្រហែល ១៤៦ ម៉ែត្រ ហើយជាអច្ឆរិយវត្ថុតែមួយគត់ក្នុងចំណោមអច្ឆរិយវត្ថុទាំងប្រាំពីរនៃពិភពបុរាណដែលនៅសល់សព្វថ្ងៃ។"))
  ]);

  ADD('astro', [
    mc(T3("太陽系中最大的行星是？", "Which is the largest planet in the Solar System?", "តើភពណាធំជាងគេក្នុងប្រព័ន្ធព្រះអាទិត្យ?"),
      [T3("土星", "Saturn", "ភពសៅរ៍"), T3("木星", "Jupiter", "ភពព្រហស្បតិ៍"), T3("海王星", "Neptune", "ភពណិបទូន"), T3("地球", "Earth", "ផែនដី")], 1,
      T3("木星是氣體巨行星，直徑約地球的 11 倍，質量比其他所有行星加起來的兩倍還多。土星第二大。",
         "Jupiter is a gas giant about 11 times Earth's diameter, with more than twice the mass of all the other planets combined. Saturn is second.",
         "ភពព្រហស្បតិ៍ជាភពឧស្ម័នយក្ស អង្កត់ផ្ចិតប្រហែល ១១ ដងនៃផែនដី ហើយម៉ាសច្រើនជាងពីរដងនៃភពផ្សេងទៀតទាំងអស់បូកបញ្ចូលគ្នា។ ភពសៅរ៍ធំទីពីរ។")),
    mc(T3("太陽系中表面溫度最高的行星是？", "Which planet has the hottest surface in the Solar System?", "តើភពណាមានផ្ទៃក្តៅជាងគេក្នុងប្រព័ន្ធព្រះអាទិត្យ?"),
      [T3("水星", "Mercury", "ភពពុធ"), T3("金星", "Venus", "ភពសុក្រ"), T3("火星", "Mars", "ភពអង្គារ"), T3("木星", "Jupiter", "ភពព្រហស្បតិ៍")], 1,
      T3("是金星，不是離太陽最近的水星。金星有濃厚的二氧化碳大氣，溫室效應讓表面約 460–470°C，連鉛都會熔化；水星沒有大氣留不住熱，夜晚會降到約 −180°C。",
         "Venus, not Mercury. Its thick carbon-dioxide atmosphere traps heat, keeping the surface around 460–470 °C, hot enough to melt lead; Mercury has almost no atmosphere and drops to about −180 °C at night.",
         "គឺភពសុក្រ មិនមែនភពពុធដែលនៅជិតព្រះអាទិត្យបំផុតទេ។ បរិយាកាសកាបូនឌីអុកស៊ីតក្រាស់ចាប់កំដៅ ធ្វើឱ្យផ្ទៃក្តៅប្រហែល ៤៦០–៤៧០°C ក្តៅល្មមរលាយសំណ។ ភពពុធស្ទើរគ្មានបរិយាកាស ហើយត្រជាក់ដល់ប្រហែល −១៨០°C ពេលយប់។")),
    mc(T3("太陽光從太陽傳到地球大約需要多久？", "About how long does sunlight take to reach Earth?", "តើពន្លឺព្រះអាទិត្យត្រូវការពេលប្រហែលប៉ុន្មានដើម្បីមកដល់ផែនដី?"),
      [T3("約 8 秒", "About 8 seconds", "ប្រហែល ៨ វិនាទី"), T3("約 8 分鐘", "About 8 minutes", "ប្រហែល ៨ នាទី"), T3("約 8 小時", "About 8 hours", "ប្រហែល ៨ ម៉ោង"), T3("約 8 天", "About 8 days", "ប្រហែល ៨ ថ្ងៃ")], 1,
      T3("日地距離約 1.5 億公里，光速約每秒 30 萬公里，相除約 500 秒，也就是約 8 分 20 秒。所以我們看到的太陽是 8 分鐘前的樣子。",
         "The Sun is about 150 million km away and light travels about 300,000 km per second, so it takes about 500 seconds, roughly 8 min 20 s. We see the Sun as it was 8 minutes ago.",
         "ចម្ងាយពីព្រះអាទិត្យប្រហែល ១៥០ លានគីឡូម៉ែត្រ ហើយពន្លឺធ្វើដំណើរប្រហែល ៣០០ ០០០ គីឡូម៉ែត្រក្នុងមួយវិនាទី ដូច្នេះត្រូវការប្រហែល ៥០០ វិនាទី ឬ ៨ នាទី ២០ វិនាទី។ យើងឃើញព្រះអាទិត្យដូចកាលពី ៨ នាទីមុន។")),
    mc(T3("被稱為「紅色星球」的是哪一顆行星？", "Which planet is called the 'Red Planet'?", "តើភពណាដែលគេហៅថា 'ភពក្រហម'?"),
      [T3("火星", "Mars", "ភពអង្គារ"), T3("金星", "Venus", "ភពសុក្រ"), T3("木星", "Jupiter", "ភពព្រហស្បតិ៍"), T3("天王星", "Uranus", "ភពអ៊ុយរ៉ានុស")], 0,
      T3("火星表面的岩石和塵土含大量氧化鐵（就像鐵鏽），所以看起來是紅橙色。",
         "Mars's rocks and dust are rich in iron oxide (like rust), giving it a reddish-orange colour.",
         "ថ្ម និងធូលីលើភពអង្គារមានអុកស៊ីតដែកច្រើន (ដូចច្រែះ) ធ្វើឱ្យវាមើលទៅពណ៌ក្រហមទឹកក្រូច។")),
    tf(T3("月亮本身會發光。", "The Moon produces its own light.", "ព្រះច័ន្ទបញ្ចេញពន្លឺដោយខ្លួនឯង។"), false,
      T3("錯。月亮反射太陽光，自己不發光。月相（新月、滿月）是因為我們從地球看到被太陽照亮那一面的比例不同。",
         "False. The Moon reflects sunlight and makes no light of its own. Its phases come from how much of the sunlit side we see from Earth.",
         "ខុស។ ព្រះច័ន្ទឆ្លុះពន្លឺព្រះអាទិត្យ មិនបញ្ចេញពន្លឺខ្លួនឯងទេ។ ដំណាក់កាលព្រះច័ន្ទកើតឡើងដោយសារយើងឃើញផ្នែកដែលត្រូវពន្លឺព្រះអាទិត្យច្រើនឬតិចពីផែនដី។")),
    mc(T3("在海平面（一大氣壓）下，純水的沸點是？", "At sea level (1 atmosphere), pure water boils at?", "នៅកម្រិតនីវ៉ូទឹកសមុទ្រ (១ បរិយាកាស) ទឹកសុទ្ធពុះនៅសីតុណ្ហភាព?"),
      ["50°C", "90°C", "100°C", "120°C"], 2,
      T3("一大氣壓下純水在 100°C 沸騰。到高山上氣壓較低，沸點會下降（例如海拔約 3,000 公尺時約 90°C），所以高山上煮飯不容易熟。",
         "Pure water boils at 100 °C at 1 atm. Higher up the pressure is lower and the boiling point drops (about 90 °C at roughly 3,000 m), which is why cooking is harder on high mountains.",
         "ទឹកសុទ្ធពុះនៅ ១០០°C ក្រោមសម្ពាធ ១ បរិយាកាស។ នៅលើភ្នំខ្ពស់ សម្ពាធទាប ចំណុចពុះធ្លាក់ចុះ (ប្រហែល ៩០°C នៅរយៈកម្ពស់ប្រហែល ៣ ០០០ ម៉ែត្រ) ដូច្នេះចម្អិនអាហារលើភ្នំខ្ពស់ពិបាកឆ្អិន។")),
    mc(T3("植物行光合作用時，從空氣中吸收哪一種氣體？", "Which gas do plants take in from the air for photosynthesis?", "តើរុក្ខជាតិស្រូបយកឧស្ម័នអ្វីពីខ្យល់សម្រាប់ធ្វើរស្មីសំយោគ?"),
      [T3("氧氣", "Oxygen", "អុកស៊ីសែន"), T3("二氧化碳", "Carbon dioxide", "កាបូនឌីអុកស៊ីត"), T3("氮氣", "Nitrogen", "អាសូត"), T3("氫氣", "Hydrogen", "អ៊ីដ្រូសែន")], 1,
      T3("光合作用：二氧化碳 + 水 + 陽光 → 葡萄糖 + 氧氣。植物吸收二氧化碳、放出氧氣。空氣中最多的是氮氣（約 78%），但植物不能直接從空氣用它。",
         "Photosynthesis: carbon dioxide + water + sunlight → glucose + oxygen. Plants take in CO₂ and release O₂. Nitrogen is the most common gas in air (about 78%), but plants cannot use it directly from the air.",
         "រស្មីសំយោគ៖ កាបូនឌីអុកស៊ីត + ទឹក + ពន្លឺព្រះអាទិត្យ → គ្លុយកូស + អុកស៊ីសែន។ រុក្ខជាតិស្រូប CO₂ ហើយបញ្ចេញ O₂។ អាសូតជាឧស្ម័នច្រើនបំផុតក្នុងខ្យល់ (ប្រហែល ៧៨%) ប៉ុន្តែរុក្ខជាតិមិនអាចប្រើវាពីខ្យល់ដោយផ្ទាល់ទេ។"))
  ]);

  ADD('food', [
    mc(T3("柬埔寨名菜「阿莫克」（Amok）最常見的做法是？", "How is the Cambodian dish 'Amok' usually made?", "តើម្ហូបខ្មែរ 'អាម៉ុក' ជាធម្មតាធ្វើដោយរបៀបណា?"),
      [T3("魚肉加椰奶和香料醬，用香蕉葉包著蒸", "Fish with coconut milk and kroeung paste, steamed in banana leaves", "ត្រីជាមួយខ្ទិះដូង និងគ្រឿង ចំហុយក្នុងស្លឹកចេក"), T3("牛肉串在炭火上烤", "Beef skewers grilled over charcoal", "សាច់គោចង្កាក់អាំងលើភ្លើងធ្យូង"), T3("米粉加豬骨清湯", "Rice noodles in clear pork-bone soup", "គុយទាវទឹកស៊ុបឆ្អឹងជ្រូក"), T3("油炸蜘蛛", "Deep-fried spiders", "អាពីងបំពង")], 0,
      T3("魚阿莫克（Amok trey）把魚肉和椰奶、柬式香料醬 kroeung（香茅、南薑、薑黃等）、雞蛋拌勻，放進香蕉葉碗裡蒸成像布丁的口感，常被視為柬埔寨的國菜之一。",
         "Fish amok (amok trey) mixes fish with coconut milk, kroeung paste (lemongrass, galangal, turmeric, etc.) and egg, then steams it in a banana-leaf cup into a soft, custard-like dish; it is often called one of Cambodia's national dishes.",
         "អាម៉ុកត្រីលាយសាច់ត្រីជាមួយខ្ទិះដូង គ្រឿង (ស្លឹកគ្រៃ រំដេង រមៀត ។ល។) និងស៊ុត រួចចំហុយក្នុងស្លឹកចេកឱ្យទន់ដូចសង់ខ្យា។ វាត្រូវបានគេចាត់ទុកថាជាម្ហូបជាតិមួយរបស់កម្ពុជា។")),
    tf(T3("「普合」（Prahok）是柬埔寨的發酵魚醬。", "Prahok is a Cambodian fermented fish paste.", "ប្រហុក គឺជាត្រីផ្អាប់របស់ខ្មែរ។"), true,
      T3("對。普合是用魚加鹽發酵製成的魚醬，味道濃烈，是柬埔寨料理很重要的調味料，可以生拌、蒸、烤或煮湯。",
         "True. Prahok is fish fermented with salt into a strong-smelling paste; it is a key seasoning in Cambodian cooking and can be eaten raw-mixed, steamed, grilled or in soups.",
         "ត្រូវ។ ប្រហុកធ្វើពីត្រីផ្អាប់ជាមួយអំបិល មានក្លិនខ្លាំង ហើយជាគ្រឿងទេសសំខាន់ក្នុងម្ហូបខ្មែរ អាចបុកឆៅ ចំហុយ អាំង ឬដាក់ស្ល។")),
    mc(T3("泡菜（Kimchi）是哪一個國家的傳統食物？", "Kimchi is a traditional food of which country?", "គីមឈី ជាអាហារប្រពៃណីរបស់ប្រទេសណា?"),
      [T3("日本", "Japan", "ជប៉ុន"), T3("韓國", "Korea", "កូរ៉េ"), T3("泰國", "Thailand", "ថៃ"), T3("越南", "Vietnam", "វៀតណាម")], 1,
      T3("韓國泡菜以大白菜或蘿蔔加辣椒粉、大蒜、薑、魚露等乳酸發酵，2013 年「醃製越冬泡菜文化」（Kimjang）被列入聯合國教科文組織人類非物質文化遺產。",
         "Korean kimchi is napa cabbage or radish fermented (lactic acid) with chilli powder, garlic, ginger and fish sauce; the kimjang tradition of making it was added to UNESCO's Intangible Cultural Heritage list in 2013.",
         "គីមឈីកូរ៉េធ្វើពីស្ពៃក្តោប ឬរ៉ាឌីស ផ្អាប់ជាមួយម្ទេសម្សៅ ខ្ទឹមស ខ្ញី និងទឹកត្រី។ ប្រពៃណីគីមចាង ត្រូវបានចុះក្នុងបញ្ជីបេតិកភណ្ឌវប្បធម៌អរូបីយូណេស្កូនៅឆ្នាំ ២០១៣។")),
    mc(T3("白米飯主要提供人體哪一種營養素？", "Which nutrient does white rice mainly provide?", "តើបាយសផ្តល់សារធាតុចិញ្ចឹមអ្វីជាចម្បង?"),
      [T3("碳水化合物（澱粉）", "Carbohydrates (starch)", "កាបូអ៊ីដ្រាត (ម្សៅ)"), T3("蛋白質", "Protein", "ប្រូតេអ៊ីន"), T3("脂肪", "Fat", "ខ្លាញ់"), T3("維生素 C", "Vitamin C", "វីតាមីន C")], 0,
      T3("白米大約 75–80%（乾重）是澱粉，是主要的能量來源；蛋白質只有約 7%，幾乎不含維生素 C。搭配魚、肉、蛋、豆和蔬菜才營養均衡。",
         "Dry white rice is roughly 75–80% starch and is mainly an energy source; it has only about 7% protein and almost no vitamin C. Pair it with fish, meat, eggs, beans and vegetables for a balanced meal.",
         "អង្ករសស្ងួតមានម្សៅប្រហែល ៧៥–៨០% ហើយជាប្រភពថាមពលចម្បង។ វាមានប្រូតេអ៊ីនតែប្រហែល ៧% និងស្ទើរគ្មានវីតាមីន C។ ញ៉ាំជាមួយត្រី សាច់ ស៊ុត សណ្តែក និងបន្លែ ទើបមានតុល្យភាព។")),
    mc(T3("為了減少細菌生長，冰箱冷藏室建議保持在幾度以下？", "To slow bacterial growth, the fridge should be kept at or below about?", "ដើម្បីបន្ថយការលូតលាស់បាក់តេរី ទូទឹកកកគួររក្សាសីតុណ្ហភាពក្រោមប្រហែល?"),
      ["5°C", "12°C", "18°C", "25°C"], 0,
      T3("食品安全常說的「危險溫度帶」約在 5°C 到 60°C 之間，細菌繁殖最快。冷藏應保持 5°C 以下（很多國家建議 4°C 以下），熱食要保持 60°C 以上，剩菜要盡快冷藏。",
         "Food-safety guidance calls roughly 5–60 °C the 'danger zone' where bacteria multiply fastest. Keep the fridge at 5 °C or below (many countries say 4 °C), keep hot food above 60 °C, and refrigerate leftovers quickly.",
         "ការណែនាំសុវត្ថិភាពអាហារហៅចន្លោះប្រហែល ៥–៦០°C ថា 'តំបន់គ្រោះថ្នាក់' ដែលបាក់តេរីកើនលឿនបំផុត។ ទូទឹកកកគួររក្សានៅ ៥°C ឬទាបជាង (ប្រទេសជាច្រើនណែនាំ ៤°C) អាហារក្តៅគួររក្សាលើស ៦០°C ហើយម្ហូបសល់គួរដាក់ទូទឹកកកឱ្យឆាប់។")),
    mc(T3("下面哪一種食物維生素 C 含量最高？", "Which of these foods is richest in vitamin C?", "តើអាហារណាខាងក្រោមមានវីតាមីន C ច្រើនជាងគេ?"),
      [T3("番石榴（芭樂）", "Guava", "ត្របែក"), T3("白米", "White rice", "អង្ករស"), T3("奶油", "Butter", "ប៊័រ"), T3("雞蛋", "Egg", "ស៊ុតមាន់")], 0,
      T3("番石榴每 100 克約含 200 毫克以上維生素 C，比柳橙（約 50 毫克）還多好幾倍；白米、奶油、雞蛋幾乎不含維生素 C。維生素 C 幫助傷口癒合和鐵的吸收。",
         "Guava has over 200 mg of vitamin C per 100 g, several times more than an orange (about 50 mg); rice, butter and eggs have almost none. Vitamin C helps wound healing and iron absorption.",
         "ត្របែកមានវីតាមីន C ជាង ២០០ មីលីក្រាមក្នុង ១០០ ក្រាម ច្រើនជាងក្រូចពោធិ៍សាត់ (ប្រហែល ៥០ មីលីក្រាម) ច្រើនដង។ អង្ករ ប៊័រ និងស៊ុតស្ទើរគ្មានទេ។ វីតាមីន C ជួយឱ្យរបួសឆាប់ជា និងជួយស្រូបជាតិដែក។")),
    mc(T3("莫札瑞拉起司（Mozzarella，常用在披薩上）源自哪個國家？", "Mozzarella cheese (common on pizza) comes from which country?", "ឈីសម៉ូហ្សារ៉េឡា (ប្រើលើភីហ្សា) មានដើមកំណើតពីប្រទេសណា?"),
      [T3("法國", "France", "បារាំង"), T3("瑞士", "Switzerland", "ស្វីស"), T3("義大利", "Italy", "អ៊ីតាលី"), T3("荷蘭", "Netherlands", "ហូឡង់")], 2,
      T3("莫札瑞拉源自義大利南部（坎帕尼亞一帶），傳統用水牛奶製作，加熱會牽絲，是拿坡里披薩的標準配料。荷蘭有高達（Gouda），瑞士有艾曼塔（Emmental）。",
         "Mozzarella comes from southern Italy (around Campania), traditionally made from buffalo milk; it stretches when melted and is the classic topping on Neapolitan pizza. Gouda is Dutch and Emmental is Swiss.",
         "ម៉ូហ្សារ៉េឡាមានដើមកំណើតពីភាគខាងត្បូងអ៊ីតាលី (តំបន់កាំប៉ានីយ៉ា) ប្រពៃណីធ្វើពីទឹកដោះក្របី។ វាយឺតពេលរលាយ ហើយជាគ្រឿងដាក់លើភីហ្សាណាប៉ូលី។ ហ្គូដាមកពីហូឡង់ ឯអេមម៉ង់តាល់មកពីស្វីស។"))
  ]);

  ADD('home', [
    mc(T3("家具品牌 IKEA 是哪一國創立的？", "In which country was the furniture company IKEA founded?", "តើក្រុមហ៊ុនគ្រឿងសង្ហារិម IKEA បង្កើតឡើងនៅប្រទេសណា?"),
      [T3("丹麥", "Denmark", "ដាណឺម៉ាក"), T3("瑞典", "Sweden", "ស៊ុយអែត"), T3("德國", "Germany", "អាល្លឺម៉ង់"), T3("芬蘭", "Finland", "ហ្វាំងឡង់")], 1,
      T3("IKEA 1943 年由坎普拉（Ingvar Kamprad）在瑞典創立，名字取自他的姓名縮寫和家鄉地名。以平板包裝、顧客自己組裝來降低成本聞名。",
         "IKEA was founded in Sweden in 1943 by Ingvar Kamprad; the name comes from his initials and his home farm and village. It is known for flat-pack furniture that customers assemble themselves to cut costs.",
         "IKEA បង្កើតនៅស៊ុយអែតឆ្នាំ ១៩៤៣ ដោយលោក អ៊ីងវ៉ា កាំប្រាដ។ ឈ្មោះមកពីអក្សរកាត់ឈ្មោះគាត់ និងឈ្មោះកសិដ្ឋាន និងភូមិកំណើត។ វាល្បីដោយគ្រឿងសង្ហារិមវេចខ្ចប់រាបស្មើ ដែលអតិថិជនដំឡើងខ្លួនឯងដើម្បីសន្សំថ្លៃ។")),
    tf(T3("炒菜鍋起火時，應該馬上潑水滅火。", "If a cooking-oil pan catches fire, you should throw water on it.", "បើខ្ទះប្រេងឆាឆេះ គួរចាក់ទឹកពន្លត់ភ្លាម។"), false,
      T3("錯！水碰到高溫油會瞬間汽化，把燃燒的油噴得到處都是，火勢更大。正確做法：關火、用鍋蓋或濕毛巾（擰乾）蓋住隔絕氧氣，或用 K 類／乾粉滅火器；不要移動鍋子。",
         "False! Water flashes to steam in hot oil and sprays burning oil everywhere, making the fire much bigger. Turn off the heat, cover the pan with a lid or a wrung-out damp towel to cut off oxygen, or use a Class K / dry-powder extinguisher; do not carry the pan.",
         "ខុស! ទឹកប៉ះប្រេងក្តៅនឹងក្លាយជាចំហាយភ្លាម ហើយបាញ់ប្រេងឆេះខ្ទាតពាសពេញ ធ្វើឱ្យភ្លើងកាន់តែធំ។ ត្រូវបិទភ្លើង គ្របខ្ទះដោយគម្រប ឬកន្សែងសើម (រមួលស្ងួត) ដើម្បីកាត់អុកស៊ីសែន ឬប្រើឧបករណ៍ពន្លត់ភ្លើងប្រភេទ K / ម្សៅស្ងួត។ កុំលើកខ្ទះ។")),
    mc(T3("LED 燈泡和傳統鎢絲燈泡亮度相同時，大約省多少電？", "For the same brightness, about how much less energy does an LED bulb use than an incandescent bulb?", "សម្រាប់ពន្លឺដូចគ្នា អំពូល LED ប្រើថាមពលតិចជាងអំពូលសរសៃដែកប្រហែលប៉ុន្មាន?"),
      [T3("約少 10%", "About 10% less", "តិចជាងប្រហែល ១០%"), T3("約少 30%", "About 30% less", "តិចជាងប្រហែល ៣០%"), T3("約少 75% 以上", "75% or more less", "តិចជាង ៧៥% ឬច្រើនជាងនេះ"), T3("差不多一樣", "About the same", "ប្រហែលគ្នា")], 2,
      T3("美國能源部資料：家用 LED 比鎢絲燈至少省 75% 電、壽命長到 25 倍。例如 60W 鎢絲燈的亮度，LED 只要約 8–10W。鎢絲燈大部分電都變成熱。",
         "According to the US Department of Energy, residential LEDs use at least 75% less energy and last up to 25 times longer than incandescent bulbs; an LED of about 8–10 W gives the light of a 60 W incandescent. Most of an incandescent bulb's energy becomes heat.",
         "យោងតាមក្រសួងថាមពលសហរដ្ឋអាមេរិក អំពូល LED ប្រើថាមពលតិចជាងយ៉ាងហោចណាស់ ៧៥% និងប្រើបានយូរជាងរហូតដល់ ២៥ ដង។ LED ប្រហែល ៨–១០W ភ្លឺស្មើអំពូលសរសៃដែក ៦០W។ ថាមពលភាគច្រើននៃអំពូលសរសៃដែកក្លាយជាកំដៅ។")),
    mc(T3("一般餐桌的標準高度大約是多少？", "What is the typical height of a dining table?", "តើកម្ពស់តុបាយធម្មតាប្រហែលប៉ុន្មាន?"),
      ["45 cm", "75 cm", "100 cm", "120 cm"], 1,
      T3("一般餐桌高約 72–76 公分，搭配座面高約 45 公分的椅子，桌面和座面差約 28–30 公分最舒服。45 公分是椅子座面或茶几的高度。",
         "Dining tables are usually about 72–76 cm high, used with chairs whose seats are about 45 cm high; a 28–30 cm gap between seat and tabletop is most comfortable. 45 cm is a chair-seat or coffee-table height.",
         "តុបាយធម្មតាខ្ពស់ប្រហែល ៧២–៧៦ ស.ម. ប្រើជាមួយកៅអីដែលកន្លែងអង្គុយខ្ពស់ប្រហែល ៤៥ ស.ម.។ គម្លាតប្រហែល ២៨–៣០ ស.ម. រវាងកន្លែងអង្គុយ និងផ្ទៃតុ ស្រួលបំផុត។ ៤៥ ស.ម. ជាកម្ពស់កៅអី ឬតុទាប។")),
    mc(T3("家具常見的「MDF 板」是什麼材料？", "What is the 'MDF board' often used in furniture?", "តើ 'ក្តារ MDF' ដែលគេប្រើក្នុងគ្រឿងសង្ហារិមជាអ្វី?"),
      [T3("整塊實木", "Solid wood", "ឈើសុទ្ធមួយដុំ"), T3("木纖維加膠高壓製成的中密度纖維板", "Medium-density fibreboard: wood fibres pressed with resin", "ក្តារសរសៃឈើដង់ស៊ីតេមធ្យម៖ សរសៃឈើសង្កត់ជាមួយកាវ"), T3("鋁合金板", "Aluminium sheet", "បន្ទះអាលុយមីញ៉ូម"), T3("塑膠發泡板", "Plastic foam board", "បន្ទះប្លាស្ទិកពពុះ")], 1,
      T3("MDF（Medium-Density Fibreboard）把木材打成纖維，加樹脂膠高溫高壓壓成板。表面平滑、好上漆、便宜，但怕水，泡水會膨脹，螺絲反覆拆裝容易鬆。",
         "MDF (medium-density fibreboard) is made by breaking wood into fibres and pressing them with resin under heat and pressure. It is smooth, easy to paint and cheap, but swells when wet and screws loosen if taken apart repeatedly.",
         "MDF (ក្តារសរសៃឈើដង់ស៊ីតេមធ្យម) ធ្វើដោយកិនឈើជាសរសៃ ហើយសង្កត់ជាមួយកាវក្រោមកំដៅ និងសម្ពាធខ្ពស់។ វារលោង លាបថ្នាំងាយ និងថោក ប៉ុន្តែប៉ោងពេលត្រូវទឹក ហើយវីសងាយរលុងបើដោះដំឡើងញឹកញាប់។")),
    mc(T3("浴室牆角容易長黑色黴菌，最主要的原因是？", "What is the main reason black mould grows in bathroom corners?", "តើមូលហេតុចម្បងដែលផ្សិតខ្មៅដុះនៅជ្រុងបន្ទប់ទឹកគឺអ្វី?"),
      [T3("濕氣高、通風不良", "High humidity and poor ventilation", "សំណើមខ្ពស់ និងខ្យល់ចេញចូលមិនល្អ"), T3("燈光太亮", "The light is too bright", "ភ្លើងភ្លឺពេក"), T3("磁磚顏色太淺", "The tiles are too light in colour", "ការ៉ូពណ៌ស្រាលពេក"), T3("水溫太低", "The water is too cold", "ទឹកត្រជាក់ពេក")], 0,
      T3("黴菌喜歡潮濕（相對濕度約 70% 以上）又不通風的地方。洗完澡開抽風機或開窗 15–30 分鐘、把牆面水擦乾，就能大幅減少黴菌。",
         "Mould thrives where it is damp (relative humidity above about 70%) and air does not move. Running the exhaust fan or opening a window for 15–30 minutes after showering and wiping walls dry greatly reduces mould.",
         "ផ្សិតចូលចិត្តកន្លែងសើម (សំណើមធៀបលើសប្រហែល ៧០%) ហើយខ្យល់មិនចេញចូល។ បើកកង្ហារបឺតខ្យល់ ឬបង្អួច ១៥–៣០ នាទីក្រោយងូតទឹក ហើយជូតជញ្ជាំងឱ្យស្ងួត នឹងកាត់បន្ថយផ្សិតបានច្រើន។"))
  ]);

  ADD('audit', [
    mc(T3("服裝業常見的社會責任認證「WRAP」全名是？", "What does the apparel social-compliance certification 'WRAP' stand for?", "តើវិញ្ញាបនបត្រអនុលោមភាពសង្គម 'WRAP' ក្នុងវិស័យកាត់ដេរមានន័យពេញថាអ្វី?"),
      [T3("Worldwide Responsible Accredited Production（全球負責任認證生產）", "Worldwide Responsible Accredited Production", "Worldwide Responsible Accredited Production (ផលិតកម្មដែលមានការទទួលស្គាល់ប្រកបដោយទំនួលខុសត្រូវទូទាំងពិភពលោក)"),
       T3("World Retail Apparel Program", "World Retail Apparel Program", "World Retail Apparel Program"), T3("Workplace Risk Assessment Plan", "Workplace Risk Assessment Plan", "Workplace Risk Assessment Plan"), T3("Worker Rights And Pay", "Worker Rights And Pay", "Worker Rights And Pay")], 0,
      T3("WRAP = Worldwide Responsible Accredited Production，是美國的非營利組織，專門認證服裝、鞋類等工廠合法、合乎人道和道德的生產。",
         "WRAP = Worldwide Responsible Accredited Production, a US non-profit that certifies apparel, footwear and other factories for lawful, humane and ethical production.",
         "WRAP = Worldwide Responsible Accredited Production ជាអង្គការមិនរកប្រាក់ចំណេញរបស់សហរដ្ឋអាមេរិក ដែលផ្តល់វិញ្ញាបនបត្រដល់រោងចក្រកាត់ដេរ ស្បែកជើង ។ល។ សម្រាប់ផលិតកម្មស្របច្បាប់ មនុស្សធម៌ និងសីលធម៌។")),
    mc(T3("WRAP 認證一共有幾條原則？", "How many principles does WRAP certification have?", "តើវិញ្ញាបនបត្រ WRAP មានគោលការណ៍ប៉ុន្មាន?"),
      ["8", "10", "12", "15"], 2,
      T3("WRAP 有 12 條原則，包括：遵守法律、禁止強迫勞動、禁止童工、禁止騷擾虐待、薪資福利、工時、禁止歧視、健康安全、結社自由與集體談判、環境、海關合規、安全保全（防止夾帶）。",
         "WRAP has 12 principles: compliance with laws, no forced labour, no child labour, no harassment or abuse, compensation and benefits, hours of work, no discrimination, health and safety, freedom of association and collective bargaining, environment, customs compliance, and security (preventing illicit shipments).",
         "WRAP មានគោលការណ៍ ១២៖ គោរពច្បាប់ ហាមពលកម្មបង្ខំ ហាមពលកម្មកុមារ ហាមការយាយី និងរំលោភ ប្រាក់ឈ្នួល និងអត្ថប្រយោជន៍ ម៉ោងធ្វើការ ហាមការរើសអើង សុខភាព និងសុវត្ថិភាព សេរីភាពសមាគម និងការចរចារួម បរិស្ថាន អនុលោមភាពគយ និងសន្តិសុខ (ការពារការលួចដាក់ទំនិញខុសច្បាប់)។")),
    tf(T3("WRAP 證書分三級：白金（2 年）、金（1 年）、銀（6 個月）。", "WRAP certificates come in three levels: Platinum (2 years), Gold (1 year) and Silver (6 months).", "វិញ្ញាបនបត្រ WRAP មានបីកម្រិត៖ ប្លាទីន (២ ឆ្នាំ) មាស (១ ឆ្នាំ) និងប្រាក់ (៦ ខែ)។"), true,
      T3("對。銀級（6 個月）表示大致合規但還有小缺失；金級 1 年；連續拿到金級（3 次）且無缺失可升白金級，效期 2 年。",
         "True. Silver (6 months) means broadly compliant with minor gaps; Gold lasts 1 year; after consecutive Gold certifications (three) with no findings a factory can reach Platinum, valid for 2 years.",
         "ត្រូវ។ កម្រិតប្រាក់ (៦ ខែ) មានន័យថាអនុលោមភាពជាទូទៅ ប៉ុន្តែនៅមានចំណុចខ្វះខាតតិចតួច។ កម្រិតមាសមានសុពលភាព ១ ឆ្នាំ។ បន្ទាប់ពីទទួលបានកម្រិតមាសជាប់ៗគ្នា (បីដង) ដោយគ្មានចំណុចខ្វះខាត រោងចក្រអាចឡើងដល់កម្រិតប្លាទីន មានសុពលភាព ២ ឆ្នាំ។")),
    mc(T3("GRS（Global Recycled Standard，全球回收標準）規定，產品要掛 GRS 標籤，回收材料至少要佔多少？", "Under GRS (Global Recycled Standard), what minimum recycled content does a product need to carry the GRS label?", "តាម GRS (ស្តង់ដារកែច្នៃសកល) ផលិតផលត្រូវមានសារធាតុកែច្នៃយ៉ាងតិចប៉ុន្មានទើបអាចដាក់ស្លាក GRS?"),
      ["5%", "20%", "50%", "100%"], 2,
      T3("GRS 由 Textile Exchange 制定：產品含至少 20% 回收材料就能進入 GRS 驗證流程，但要在產品上掛 GRS 標籤，回收材料必須至少 50%。另外還要求社會責任、環境和化學品管理。",
         "GRS, owned by Textile Exchange, lets products with at least 20% recycled content be certified, but only products with at least 50% recycled content may carry the GRS label. It also has social, environmental and chemical requirements.",
         "GRS ជាកម្មសិទ្ធិរបស់ Textile Exchange។ ផលិតផលដែលមានសារធាតុកែច្នៃយ៉ាងតិច ២០% អាចទទួលវិញ្ញាបនបត្របាន ប៉ុន្តែមានតែផលិតផលដែលមានសារធាតុកែច្នៃយ៉ាងតិច ៥០% ទេដែលអាចដាក់ស្លាក GRS។ វាក៏មានតម្រូវការសង្គម បរិស្ថាន និងគីមីផងដែរ។")),
    mc(T3("驗廠時，工作時間內的安全出口應該是什麼狀態？", "During working hours, what condition must emergency exits be in during an audit?", "ក្នុងម៉ោងធ្វើការ តើច្រកចេញសង្គ្រោះបន្ទាន់ត្រូវស្ថិតក្នុងស្ថានភាពបែបណាពេលសវនកម្ម?"),
      [T3("不上鎖、無阻擋、標示清楚，可以往外推開", "Unlocked, unobstructed, clearly marked and opening outward", "មិនចាក់សោ គ្មានរបាំង មានសញ្ញាច្បាស់ ហើយបើកចេញក្រៅ"), T3("上鎖防止偷竊，鑰匙放在保全室", "Locked against theft, key kept in the guard room", "ចាក់សោការពារចោរ ដាក់កូនសោនៅបន្ទប់សន្តិសុខ"), T3("可以暫時堆放紙箱，下班前清走", "Boxes may be stacked there temporarily and cleared before closing", "អាចដាក់ប្រអប់បណ្តោះអាសន្ន ហើយរើចេញមុនចេញពីការងារ"), T3("只有主管下班時才打開", "Opened only when supervisors leave", "បើកតែពេលប្រធានចេញពីការងារ")], 0,
      T3("上鎖或擋住的安全出口是驗廠「重大／零容忍」缺失之一，曾造成多起工廠火災悲劇。出口必須上班時間不上鎖、走道淨空、有亮著的出口標示和逃生圖，門要往逃生方向開。",
         "Locked or blocked exits are a critical / zero-tolerance audit finding and have caused deadly factory fires. Exits must be unlocked during working hours, with clear aisles, lit exit signs and evacuation maps, and doors opening in the direction of escape.",
         "ច្រកចេញដែលចាក់សោ ឬមានរបាំង ជាចំណុចខ្វះខាតធ្ងន់ធ្ងរ / មិនអត់ឱន ក្នុងសវនកម្ម ហើយធ្លាប់បណ្តាលឱ្យមានអគ្គិភ័យរោងចក្របាត់បង់ជីវិតជាច្រើន។ ច្រកចេញត្រូវតែមិនចាក់សោក្នុងម៉ោងធ្វើការ ផ្លូវដើរទំនេរ មានសញ្ញាច្រកចេញភ្លឺ និងផែនទីជម្លៀស ហើយទ្វារបើកតាមទិសដៅរត់គេច។")),
    mc(T3("依柬埔寨《勞動法》，一般受僱工作的最低年齡是幾歲？", "Under the Cambodian Labour Law, what is the general minimum age for employment?", "តាមច្បាប់ស្តីពីការងារនៃកម្ពុជា តើអាយុអប្បបរមាសម្រាប់ការងារទូទៅគឺប៉ុន្មានឆ្នាំ?"),
      [T3("12 歲", "12", "១២ ឆ្នាំ"), T3("15 歲", "15", "១៥ ឆ្នាំ"), T3("16 歲", "16", "១៦ ឆ្នាំ"), T3("21 歲", "21", "២១ ឆ្នាំ")], 1,
      T3("柬埔寨《勞動法》第 177 條：受僱最低年齡為 15 歲；危險工作須滿 18 歲。工廠驗廠時會查身分證影本、年齡證明和未成年工登記，雇用未滿 15 歲屬童工、是零容忍缺失。",
         "Article 177 of the Cambodian Labour Law sets the minimum employment age at 15, and 18 for hazardous work. Auditors check ID copies, age verification and young-worker registers; employing anyone under 15 is child labour and a zero-tolerance finding.",
         "មាត្រា ១៧៧ នៃច្បាប់ស្តីពីការងារកំណត់អាយុអប្បបរមាសម្រាប់ការងារ ១៥ ឆ្នាំ និង ១៨ ឆ្នាំសម្រាប់ការងារគ្រោះថ្នាក់។ សវនករពិនិត្យច្បាប់ចម្លងអត្តសញ្ញាណប័ណ្ណ ការផ្ទៀងផ្ទាត់អាយុ និងបញ្ជីកម្មករវ័យក្មេង។ ការជួលអ្នកអាយុក្រោម ១៥ ឆ្នាំជាពលកម្មកុមារ និងជាចំណុចខ្វះខាតមិនអត់ឱន។")),
    mc(T3("下面哪一項在大部分客戶驗廠中屬於「零容忍」問題？", "Which of these is a 'zero-tolerance' issue in most customer audits?", "តើចំណុចណាខាងក្រោមជាបញ្ហា 'មិនអត់ឱន' ក្នុងសវនកម្មអតិថិជនភាគច្រើន?"),
      [T3("扣留員工身分證件、強迫加班", "Holding workers' ID documents and forcing overtime", "រក្សាទុកអត្តសញ្ញាណប័ណ្ណកម្មករ និងបង្ខំឱ្យធ្វើការថែមម៉ោង"), T3("急救箱標示有點褪色", "A slightly faded first-aid box sign", "សញ្ញាប្រអប់សង្គ្រោះបឋមរសាត់បន្តិច"), T3("員工餐廳桌子沒擦乾淨", "Canteen tables not wiped clean", "តុអាហារដ្ឋានមិនបានជូតស្អាត"), T3("布告欄公告過期一週", "A notice on the board one week out of date", "សេចក្តីជូនដំណឹងលើក្តារហួសកាលកំណត់មួយសប្តាហ៍")], 0,
      T3("扣留證件、押金、強迫加班都屬於「強迫勞動」，和童工、上鎖的安全出口、賄賂稽核員、偽造紀錄等，是多數品牌的零容忍項目，一經發現可能立即停單。其他三項是一般的小缺失，改善即可。",
         "Holding IDs, charging deposits and forced overtime count as forced labour; together with child labour, locked exits, bribing auditors and falsified records, they are zero-tolerance for most brands and can stop orders immediately. The other three are minor findings that just need correcting.",
         "ការរក្សាអត្តសញ្ញាណប័ណ្ណ ការយកប្រាក់កក់ និងការបង្ខំឱ្យធ្វើការថែមម៉ោង ចាត់ទុកជាពលកម្មបង្ខំ។ រួមជាមួយពលកម្មកុមារ ច្រកចេញចាក់សោ ការសូកប៉ាន់សវនករ និងកំណត់ត្រាក្លែងក្លាយ ទាំងនេះជាចំណុចមិនអត់ឱនសម្រាប់ម៉ាកភាគច្រើន ហើយអាចបញ្ឈប់ការបញ្ជាទិញភ្លាម។ ចំណុចបីផ្សេងទៀតជាចំណុចខ្វះខាតតូចៗដែលគ្រាន់តែកែតម្រូវ។"))
  ]);
})();
