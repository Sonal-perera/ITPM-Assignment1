// tests/assignment1.spec.js
const { test, expect } = require('@playwright/test');

const TARGET_URL = 'https://www.swifttranslator.com/';

// -----------------------------------------------------------------------
// POSITIVE FUNCTIONAL TESTS
// -----------------------------------------------------------------------

test('Pos_Fun_0001: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Oyaa heta vaedata yanavaadha?');
  
  await expect(page.getByText('ඔයා හෙට වැඩට යනවාද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0002: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Meeting eka postpone karanna puluvan dha?');

  await expect(page.getByText('Meeting එක postpone කරන්න පුලුවන් ද?')).toBeVisible({ timeout: 10000 });
});

//

test('Pos_Fun_0003: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('adha oyaa monavadha kanna geNaavee?');

  await expect(page.getByText('අද ඔයා මොනවද කන්න ගෙණාවේ?')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0004: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Mama adha late venna puluvan, traffic eka ban.');

  await expect(page.getByText('මම අද late වෙන්න පුලුවන්, traffic එක බන්')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0005: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('aayuboovan! karuNaakaralaa mata podi udhavvak karanna puLuvandha ?');

  await expect(page.getByText('ආයුබෝවන්! කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද ?')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0006: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Adoo vihilu karanne naethuva party ekata enna');

  await expect(page.getByText('අඩෝ විහිලු කරන්නේ නැතුව party එකට එන්න')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0007: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('ela machan, dhaen ithin monavadha karanne kiyalaa hithaaganna baee');

  await expect(page.getByText('එල මචන්, දැන් ඉතින් මොනවද කරන්නේ කියලා හිතාගන්න බෑ')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_0008: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Adha havasa 6 ta kalin vaedee ivara karala thiyenna onee, naeththam mata boss banivii. Oyaa dhanNavanee eyagee haeti');

  await expect(page.getByText('අද හවස 6 ට කලින් වැඩේ ඉවර කරල තියෙන්න ඔනේ, නැත්තම් මට boss බනිවී. ඔයා දන්නවනේ එයගේ හැටි')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0009: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('aayuboovan mahathmayaa, api amathanne SLT mobitel eken. mahathmayage pasugiya masa bilpatha geva nomAEthi nisa sambandhathaava visandhi viimata hAEkiyaava thiyanava.');

  await expect(page.getByText('ආයුබෝවන් මහත්මයා, අපි අමතන්නෙ SLT මොබිටෙල් එකෙන්. මහත්මයගෙ පසුගිය මස බිල්පත ගෙව නොමැති නිස සම්බන්දතාව විසන්දි වීමට හැකියාව තියනව.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0010: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('iiye oyaa campus giyadha');

  await expect(page.getByText('ඊයෙ ඔයා campus ගියද')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0011: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('namuth nisaekavama shudhDha vuu vimarshanaya, palliyee siragevalvala vaDhahinsaa kiriimee upakaraNa pariikShaa kiriima saDHAhaa vaedihiti haa dhurvala gaeliiliyoova yomu kiriima piLiganii pamaNak nova, evaeni arThakaThanayak avashYA karayi. meya hudhek vidhYaathmaka avavaadhayak saha sayamayak novee, vaarShika paraamithiya vaeni balagathu saakShi labaa gatha haeki vana thek aadharshayak maaru kiriimata aethi akamaeththaki. meya saakachChaavata saha vivaadhayata aethi biyayi. vikalpa adhahas vaaraNaya kiriima saha vaDhahinsaa paemiNaviimata tharjanaya kiriima ovungee yoojakayin aarakShaa kara aethi bava penena muulaDharmaya saha palliya kerehima vishvaasayak nomaethikama paavaa dheyi. tharjana saha gaeliiliyoogee nivasa athadanguvata gaeniima avashYA vuuyee aeyi? sathYAyata vaeraedhdha samaGA gaetiimen thamanva aarakShaa kara gatha nohaekidha?');

  await expect(page.getByText('නමුත් නිසැකවම ශුද්ධ වූ විමර්ශනය, පල්ලියේ සිරගෙවල්වල වධහින්සා කිරීමේ උපකරණ පරීක්ෂා කිරීම සඳහා වැඩිහිටි හා දුර්වල ගැලීලියෝව යොමු කිරීම පිළිගනී පමණක් නොව, එවැනි අර්ථකථනයක් අවශ්‍ය කරයි. මෙය හුදෙක් විද්‍යාත්මක අවවාදයක් සහ සයමයක් නොවේ, වාර්ෂික පරාමිතිය වැනි බලගතු සාක්ෂි ලබා ගත හැකි වන තෙක් ආදර්ශයක් මාරු කිරීමට ඇති අකමැත්තකි. මෙය සාකච්ඡාවට සහ විවාදයට ඇති බියයි. විකල්ප අදහස් වාරණය කිරීම සහ වධහින්සා පැමිණවීමට තර්ජනය කිරීම ඔවුන්ගේ යෝජකයින් ආරක්ෂා කර ඇති බව පෙනෙන මූලධර්මය සහ පල්ලිය කෙරෙහිම විශ්වාසයක් නොමැතිකම පාවා දෙයි. තර්ජන සහ ගැලීලියෝගේ නිවස අතඩන්ගුවට ගැනීම අවශ්‍ය වූයේ ඇයි? සත්‍යයට වැරැද්ද සමඟ ගැටීමෙන් තමන්ව ආරක්ෂා කර ගත නොහැකිද?')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0012: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mata eeka epaa.');

  await expect(page.getByText('මට ඒක එපා.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0013: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Mn dhanna eva venayi oyaa dhanna eva venayi ee nisa oova hithanna epaa, anika oyaagee hodhata kiyanne 100% trust eka thiyannath epaa oyaa maybe dhnne nathuva aethi campus ekee athulee vena dheval.');

  await expect(page.getByText('Mn දන්න එව වෙනයි ඔයා දන්න එව වෙනයි ඒ නිස ඕව හිතන්න එපා, අනික ඔයාගේ හොදට කියන්නෙ 100% trust එක තියන්නත් එපා ඔයා maybe ද්න්නෙ නතුව ඇති campus එකේ අතුලේ වෙන දෙවල්.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0014: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mama gedhara yanavaa, heethuva vahina nisaa dhaenma yannee naehae');
  
  await expect(page.getByText('මම ගෙදර යනවා, හේතුව වහින නිසා දැන්ම යන්නේ නැහැ')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0015: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mama dhaen vaeda karanavaa');
  
  await expect(page.getByText('මම දැන් වැඩ කරනවා')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0016: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('supiri machan!');
  
  await expect(page.getByText('සුපිරි මචන්!')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0017: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Mata oyaagee ID eka onee!');
  
  await expect(page.getByText('මට ඔයාගේ ID එක ඔනේ!')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0018: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oyata puLuvannam karuNakarala mata yanna dhenna, mata hodhatama parakku venavaa malli.');
  
  await expect(page.getByText('ඔයට පුළුවන්නම් කරුණකරල මට යන්න දෙන්න, මට හොදටම පරක්කු වෙනවා මල්ලි.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0019: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mama office yanavaa.');
  
  await expect(page.getByText('මම office යනවා.')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_0020: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mama heta sellam karanna yanava.');
  
  await expect(page.getByText('මම හෙට සෙල්ලම් කරන්න යනව.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0021: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('maeethakadhii, gimhaanaya avasaanayee piLigaeniimee sisil dhinayaka, laShiinaa nam visi nava haeviridhi kaanthaavak chikaagoo hi dhakuNu paeththee nivaasa vYaapRUthiyak vana diyarboon hooms idhiripita SUV raThayaka hud eka matha vaadi vuuvaaya. aegee aesvala thibuNee kalakiruNu penumak, namuth esee nomaethi nam tharuNa bavak penennata thibuNi, aegee lassana muhuNa keLin kaLa hisakes valin raamu kara aetha. aeya kudaa kala sitama aeDHA siti kaLu saha rathu paehaethi baeeg traeksuut ekakin saerasii sitiyaaya. aegee dhemavpiyanta aluth AEdhum saDHAhaa mudhal thibuNee kalaathurakini, ebaevin aeya aegee GHAathi sahoodhara sahoodhariyangee AEdhum labaa gaeniimata purudhuva sitiyaaya.');
  
  await expect(page.getByText('මෑතකදී, ගිම්හානය අවසානයේ පිළිගැනීමේ සිසිල් දිනයක, ලෂීනා නම් විසි නව හැවිරිදි කාන්තාවක් චිකාගෝ හි දකුණු පැත්තේ නිවාස ව්‍යාපෘතියක් වන ඩියර්බෝන් හෝම්ස් ඉදිරිපිට SUV රථයක හුඩ් එක මත වාඩි වූවාය. ඇගේ ඇස්වල තිබුණේ කලකිරුණු පෙනුමක්, නමුත් එසේ නොමැති නම් තරුණ බවක් පෙනෙන්නට තිබුණි, ඇගේ ලස්සන මුහුණ කෙළින් කළ හිසකෙස් වලින් රාමු කර ඇත. ඇය කුඩා කල සිටම ඇඳ සිටි කළු සහ රතු පැහැති බෑග් ට්‍රැක්සූට් එකකින් සැරසී සිටියාය. ඇගේ දෙමව්පියන්ට අලුත් ඇදුම් සඳහා මුදල් තිබුණේ කලාතුරකිනි, එබැවින් ඇය ඇගේ ඥාති සහෝදර සහෝදරියන්ගේ ඇදුම් ලබා ගැනීමට පුරුදුව සිටියාය.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0022: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oyaata badagini naedhdha?');
  
  await expect(page.getByText('ඔයාට බඩගිනි නැද්ද?')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0023: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Mama email eka check karala reply karannam.');
  
  await expect(page.getByText('මම email එක check කරල reply කරන්නම්.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0024: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('gaeliiliyoogee kaalayee sita nuuthana vidhYaava piLibaDHA paapthumaagee nosansunthaavaya kramayen adu vii galaa gos aetha. maeetha ithihaasayee ihaLama jala salakuNa vannee 1864 viShaya maalaavayi. navavana piyusgee dhooSha, paapthumaa vathikaanu kavunsilaya dha kaeDHAvuu athara ehidhii paapthumaagee novaradhina bava piLibaDHA muulaDharmaya ohugee bala kiriima matha praThama varata prakaashayata path karana ladhii.');
  
  await expect(page.getByText('ගැලීලියෝගේ කාලයේ සිට නූතන විද්‍යාව පිළිබඳ පාප්තුමාගේ නොසන්සුන්තාවය ක්‍රමයෙන් අඩු වී ගලා ගොස් ඇත. මෑත ඉතිහාසයේ ඉහළම ජල සලකුණ වන්නේ 1864 විෂය මාලාවයි. නවවන පියුස්ගේ දෝෂ, පාප්තුමා වතිකානු කවුන්සිලය ද කැඳවූ අතර එහිදී පාප්තුමාගේ නොවරදින බව පිළිබඳ මූලධර්මය ඔහුගේ බල කිරීම මත ප්‍රථම වරට ප්‍රකාශයට පත් කරන ලදී.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_00025: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Oyaa heta vaedata yanavaadha?');
  
  await expect(page.getByText('ඔයා හෙට වැඩට යනවාද?')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_0028: Mixed Language (Singlish + English)', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  const input = 'mama Zoom meeting ekata join unaa.';
  
  await inputBox.fill(input);
  
  // Check if "Zoom meeting" is visible in the output area
  // We use .last() because the input box also contains "Zoom meeting", 
  // and we want to find the other one (the output).
  await expect(page.getByText('Zoom meeting').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0028: Numeric and Currency Format', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Rs. 5000 k deepan.');

  // Check if "Rs. 5000" is visible
  await expect(page.getByText('Rs. 5000').last()).toBeVisible({ timeout: 10000 });
});

// -----------------------------------------------------------------------
// NEGATIVE / ROBUSTNESS TESTS
// -----------------------------------------------------------------------



test('Neg_Fun_0001: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mee oyaa ara boy ge instagram account eka dhannavadha?');
  
  await expect(page.getByText('මේ ඔයා අර boy ගෙ instagram account එක දන්නවද?')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0002: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('kumaar Sangakkara kiyanne Sri Lanka cricket history eke inna supirima legend kenek. Left-hand batsman kenek vidhiyata eyaage cover drive eka cover drive ekak nemei, eeka art ekak. Wicketkeeper-batsman kenek vidhiyata international cricket vala 28,000+ runs gahala, 63 centuries aragena thiyenava. 2011 World Cup team eka lead karala, 2014 T20 World Cup ekath dhinaagena, records godak thamange nama issarahen liyagaththaa. 2015 world cup eke consecutive centuries 4k gahapu pahara, top-order batting valadhi calm demeanor ekak thiyena, gentleman player kenek. Anith eka, MCC (Marylebone Cricket Club) eke prathama non-British President vidiyata appoint vechcha Srilankan kenath Sanga thamaa. Eyage technique eka, class eka, leadership eka, e vageama humility eka nisa, global Ambassador kenek vidiyata cricket valata loku meheyakkarakuth ekkanavama, Sanga yannane "Class Never Retires" kiyana eka prove karapu legend kenek.');
  
  await expect(page.getByText('කුමාර් සන්ගක්කර කියන්නෙ ස්‍රි Lanka cricket history eke ඉන්න සුපිරිම legend කෙනෙක්. Left-hand batsman කෙනෙක් විදියට එයාගෙ cover drive එක cover drive එකක් නෙමේ, ඒක art එකක්. Wicketkeeper-batsman කෙනෙක් විදියට international cricket වල 28,000+ runs ගහල, 63 centuries අරගෙන තියෙනව. 2011 World Cup team එක lead කරල, 2014 T20 World Cup එකත් දිනාගෙන, records ගොඩක් තමන්ගෙ නම ඉස්සරහෙන් ලියගත්තා. 2015 world cup eke consecutive centuries 4ක් ගහපු පහර, ටොප්-order batting වලදි calm demeanor එකක් තියෙන, gentleman player කෙනෙක්. අනිත් එක, MCC (මර්ය්ලෙබොනෙ Cricket Club) eke ප්‍රතම non-British President විඩියට appoint වෙච්ච ස්‍රිලන්කන් කෙනත් සන්ග තමා. එයගෙ technique එක, class එක, leadership එක, එ වගේම humility එක නිස, global Ambassador කෙනෙක් විඩියට cricket වලට ලොකු මෙහෙයක්කරකුත් එක්කනවම, සන්ග යන්නනෙ "Class Never Retires" කියන එක prove කරපු legend කෙනෙක්.')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0003: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('thankyoumachan');
  
  await expect(page.getByText('තැන්ක්‍යූමචන්')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0004: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('machan uba eeka chatgpt ekee gahala balapan');
  
  await expect(page.getByText('මචන් උබ ඒක chatgpt එකේ ගහල බලපන්')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0005: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mamagedharayanavaa');
  
  await expect(page.getByText('මම ගෙදර යනවා')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0006: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('uu ekapaaratama magen ahuva " what kind of man are you" kiyala.');
  
  await expect(page.getByText('ඌ එකපාරටම මගෙන් අහුව " what kind ඔෆ් man are you" කියල.')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0007: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oyaa capcut use karala vidiyo edit kalaadha?');
  
  await expect(page.getByText('ඔයා capcut use කරල විඩියො edit කලාද?')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0008: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mamanam powerpoint use karala thamaa slides tika dhaemmee.');
  
  await expect(page.getByText('මමනම් powerpoint use කරල තමා slides ටික දැම්මේ.')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0009: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('a d a k a l u p a t a a d u m a k a d a n a w e');
  
  await expect(page.getByText('අ ද ක ලු පා ට ඇ දු ම ක් ඇ ද න් ආ වේ')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0010: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('adha mama JavaScript igena gaththaa, namuth syntax tika poddak amaaruyi kiyalaa hithenavaa.');
  
  await expect(page.getByText('අද මම JavaScript ඉගෙන ගත්තා, නමුත් syntax ටික පොඩ්ඩක් අමාරුයි කියලා හිතෙනවා.')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0011: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mamanam powerpoint use karala thamaa slides tika dhaemmee.');
  
  await expect(page.getByText('මමනම් powerpoint use කරල තමා slides ටික දැම්මේ.')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0012: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mamanam powerpoint use karala thamaa slides tika dhaemmee.');
  
  await expect(page.getByText('මමනම් powerpoint use කරල තමා slides ටික දැම්මේ.')).toBeVisible({ timeout: 10000 });
});



// -----------------------------------------------------------------------
// UI TEST SCENARIO
// -----------------------------------------------------------------------

test('Pos_UI_0001: Real-time Update Check', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');

  // Type slowly
  await inputBox.pressSequentially('submit karanna', { delay: 200 }); 

  // Wait for the Sinhala translation "මම" to appear
  await expect(page.getByText('submit කරන්න').first()).toBeVisible({ timeout: 10000 });
});

