export type Lang = "ko" | "en";

export interface DreamEntry {
  keywords: { ko: string[]; en: string[] };
  title: { ko: string; en: string };
  interpretation: { ko: string; en: string };
  luckyColor: { ko: string; en: string };
  luckyNumber: number;
  energy: "매우 좋음" | "좋음" | "보통" | "주의";
}

export const dreamData: DreamEntry[] = [
  {
    keywords: { ko: ["돼지", "멧돼지", "돼지꿈"], en: ["pig", "boar", "hog"] },
    title: { ko: "돼지 꿈", en: "Dream of a Pig" },
    interpretation: {
      ko: "돼지 꿈은 재물과 복을 상징하는 대표적인 길몽입니다. 돼지를 잡거나 만지는 꿈은 큰 재물이 들어올 징조이며, 살찐 돼지일수록 더 큰 행운을 의미합니다. 사업가라면 계약이 성사되거나 투자 성과를 기대해 볼 수 있고, 직장인이라면 승진이나 보너스 소식이 올 수 있습니다.",
      en: "A pig dream is one of the most auspicious omens, symbolizing wealth and fortune. Catching or touching a pig signals incoming prosperity — the fatter the pig, the greater the luck. Entrepreneurs may seal a big deal, while employees could expect a promotion or bonus.",
    },
    luckyColor: { ko: "금색", en: "Gold" },
    luckyNumber: 8,
    energy: "매우 좋음",
  },
  {
    keywords: { ko: ["똥", "대변", "분변", "변"], en: ["poop", "feces", "excrement", "dung"] },
    title: { ko: "똥·대변 꿈", en: "Dream of Excrement" },
    interpretation: {
      ko: "똥 꿈은 한국 전통 해몽에서 가장 강력한 재물 길몽 중 하나입니다. 똥을 밟거나, 뒤집어쓰거나, 만지는 꿈일수록 더 큰 돈이 들어온다는 신호입니다. 로또·복권 구매를 고려해 볼 시점이며, 오랫동안 기다리던 금전적 문제가 해결될 수 있습니다.",
      en: "In Korean dream tradition, dreaming of excrement is among the most powerful wealth omens. The more contact you have with it — stepping in it, being covered by it — the greater the financial windfall. Consider buying a lottery ticket; long-awaited money matters may finally resolve.",
    },
    luckyColor: { ko: "황금색", en: "Golden" },
    luckyNumber: 3,
    energy: "매우 좋음",
  },
  {
    keywords: { ko: ["조상", "조상님", "할아버지", "할머니", "돌아가신", "죽은 가족", "선조"], en: ["ancestor", "grandfather", "grandmother", "deceased", "dead relative", "grandparent"] },
    title: { ko: "조상님 꿈", en: "Dream of Ancestors" },
    interpretation: {
      ko: "돌아가신 조상님이 꿈에 나타나는 것은 중요한 메시지를 전달하려는 것입니다. 조상님이 웃으며 음식을 주신다면 건강과 행운의 길조이고, 근심 어린 표정이라면 가족 중 누군가의 건강이나 중요한 결정에 주의가 필요하다는 경고입니다.",
      en: "A deceased ancestor appearing in your dream carries an important message. If they smile and offer food, it is an auspicious sign of health and fortune. A worried expression is a gentle warning to pay attention to a family member's wellbeing or an important upcoming decision.",
    },
    luckyColor: { ko: "흰색", en: "White" },
    luckyNumber: 1,
    energy: "좋음",
  },
  {
    keywords: { ko: ["용", "용꿈", "청룡", "황룡", "비룡"], en: ["dragon", "celestial dragon", "golden dragon"] },
    title: { ko: "용 꿈", en: "Dream of a Dragon" },
    interpretation: {
      ko: "용은 권위, 권력, 대길(大吉)의 상징입니다. 하늘로 승천하는 용은 대성공과 출세를 의미하고, 용을 타거나 용이 내 몸을 감싸는 꿈은 큰 행운과 명예가 따르는 최고의 길몽입니다. 임신 중인 분이 꿨다면 귀한 자녀를 얻을 태몽일 수 있습니다.",
      en: "The dragon symbolizes supreme authority, power, and great fortune. A dragon ascending to the sky means outstanding success and rise in status. Riding a dragon or being embraced by one is the highest auspicious omen. For a pregnant person, this may be a conception dream of a remarkable child.",
    },
    luckyColor: { ko: "청색", en: "Blue" },
    luckyNumber: 9,
    energy: "매우 좋음",
  },
  {
    keywords: { ko: ["뱀", "구렁이", "코브라", "비단뱀"], en: ["snake", "serpent", "python", "cobra"] },
    title: { ko: "뱀 꿈", en: "Dream of a Snake" },
    interpretation: {
      ko: "뱀 꿈은 맥락에 따라 다르게 해석됩니다. 큰 뱀이나 구렁이를 보는 꿈은 재물과 지혜의 상징으로 길몽에 가깝습니다. 뱀에게 물리는 꿈은 갑작스러운 재물 획득이나 이성과의 인연을 의미합니다. 다만 뱀이 나를 쫓아오는 꿈은 주변의 배신이나 시기심에 주의하라는 신호입니다.",
      en: "Snake dreams are highly context-dependent. Seeing a large snake symbolizes wealth and wisdom — generally a good omen. Being bitten by a snake often signals unexpected financial gain or a new romantic connection. However, being chased by a snake warns of potential betrayal or envy from someone nearby.",
    },
    luckyColor: { ko: "초록색", en: "Green" },
    luckyNumber: 6,
    energy: "좋음",
  },
  {
    keywords: { ko: ["물", "강", "호수", "폭포", "파도"], en: ["water", "river", "lake", "waterfall", "wave", "stream"] },
    title: { ko: "물·강 꿈", en: "Dream of Water" },
    interpretation: {
      ko: "물은 무의식과 감정을 상징합니다. 맑고 잔잔한 물은 현재 심리 상태가 안정적이며 앞길이 순탄함을 의미합니다. 거칠고 탁한 물은 감정적 갈등이나 어려운 상황을 암시합니다. 깊은 바다를 헤엄치는 꿈은 큰 도전을 마주하고 있음을 나타내며, 헤엄쳐 건너면 성공을 뜻합니다.",
      en: "Water symbolizes the unconscious mind and emotions. Clear, calm water reflects psychological stability and a smooth path ahead. Turbulent or murky water hints at emotional conflict or difficult circumstances. Swimming across deep water represents facing a great challenge — and making it across signals eventual success.",
    },
    luckyColor: { ko: "하늘색", en: "Sky Blue" },
    luckyNumber: 7,
    energy: "좋음",
  },
  {
    keywords: { ko: ["불", "화재", "불꽃", "불길", "모닥불"], en: ["fire", "flame", "blaze", "bonfire", "inferno"] },
    title: { ko: "불·화재 꿈", en: "Dream of Fire" },
    interpretation: {
      ko: "불은 열정, 에너지, 변화의 상징입니다. 활활 타오르는 불을 바라보는 꿈은 강렬한 의욕과 성공에 대한 열망을 의미하며 사업 번창의 조짐입니다. 집에 불이 나는 꿈은 놀랍게도 길몽으로, 큰 재물이나 변화가 찾아온다는 신호입니다. 반면 불에 타는 고통은 현실의 스트레스를 반영합니다.",
      en: "Fire represents passion, energy, and transformation. Watching a roaring blaze signifies intense ambition and the desire for success — a good omen for business. Surprisingly, a house fire dream is considered lucky, signaling great wealth or a major life change. Feeling pain while burning reflects real-world stress.",
    },
    luckyColor: { ko: "빨간색", en: "Red" },
    luckyNumber: 4,
    energy: "좋음",
  },
  {
    keywords: { ko: ["하늘", "구름", "하늘을 날다", "비행", "날다"], en: ["sky", "cloud", "flying", "float", "soar", "fly"] },
    title: { ko: "하늘을 나는 꿈", en: "Dream of Flying" },
    interpretation: {
      ko: "하늘을 자유롭게 나는 꿈은 현실에서 억눌린 욕구와 자유에 대한 갈망을 나타냅니다. 높이 날수록 목표가 높고 성취 욕구가 강하다는 의미입니다. 막힘 없이 날 수 있다면 현재 상황을 초월할 능력이 있음을 암시하며, 날갯짓이 힘들다면 현실의 장애물을 의미합니다.",
      en: "Flying freely through the sky expresses a longing for freedom and a release from real-world constraints. The higher you fly, the more ambitious your goals. Effortless flight suggests you have the ability to transcend your current circumstances. Struggling to stay aloft points to obstacles standing in your way.",
    },
    luckyColor: { ko: "하늘색", en: "Sky Blue" },
    luckyNumber: 5,
    energy: "좋음",
  },
  {
    keywords: { ko: ["이빨", "이가 빠지다", "치아", "이가 흔들리다"], en: ["tooth", "teeth", "losing teeth", "tooth falling out"] },
    title: { ko: "이빨 빠지는 꿈", en: "Dream of Losing Teeth" },
    interpretation: {
      ko: "이빨이 빠지는 꿈은 가장 흔한 불안 꿈 중 하나입니다. 심리적으로 자존심 상실, 무력감, 또는 중요한 것을 잃을 것 같은 두려움을 반영합니다. 한국 전통 해몽에서는 가족 중 누군가에게 우환이 생길 수 있다는 경고로도 해석합니다.",
      en: "Losing teeth is one of the most universal anxiety dreams. Psychologically, it reflects feelings of lost self-confidence, helplessness, or a deep fear of losing something important. In Korean tradition, it may also serve as a gentle warning that a family member could face difficulties.",
    },
    luckyColor: { ko: "흰색", en: "White" },
    luckyNumber: 2,
    energy: "주의",
  },
  {
    keywords: { ko: ["죽음", "죽다", "사망", "장례", "무덤", "영정"], en: ["death", "dying", "funeral", "grave", "dead"] },
    title: { ko: "죽음·장례 꿈", en: "Dream of Death" },
    interpretation: {
      ko: "꿈속 죽음은 실제 죽음이 아닌 '변화와 새로운 시작'을 상징합니다. 내가 죽는 꿈은 현재의 나를 버리고 새롭게 태어나려는 심리적 변화를 의미합니다. 타인의 죽음은 그 사람과의 관계 변화나 새로운 국면을 암시합니다.",
      en: "Death in a dream does not signify actual death — it symbolizes transformation and new beginnings. Dreaming of your own death reflects a deep psychological desire to shed your old self and be reborn. Another person's death suggests a significant shift in your relationship with them or the start of a new phase.",
    },
    luckyColor: { ko: "보라색", en: "Purple" },
    luckyNumber: 0,
    energy: "보통",
  },
  {
    keywords: { ko: ["돈", "현금", "지폐", "금", "보물", "돈다발"], en: ["money", "cash", "gold", "treasure", "bill", "coins", "wealth"] },
    title: { ko: "돈·재물 꿈", en: "Dream of Money" },
    interpretation: {
      ko: "꿈에서 돈을 줍거나 받는 것은 현실에서 재물운이 상승할 징조입니다. 특히 길거리에서 돈다발을 줍는 꿈은 예상치 못한 수입이나 행운이 찾아올 것을 의미합니다. 반대로 돈을 잃는 꿈은 불필요한 지출을 조심하거나 재정 계획을 재검토하라는 신호입니다.",
      en: "Finding or receiving money in a dream signals rising financial fortune. Picking up a bundle of cash on the street foretells unexpected income or windfall luck. Conversely, losing money in a dream is a prompt to watch unnecessary spending and review your financial plans carefully.",
    },
    luckyColor: { ko: "금색", en: "Gold" },
    luckyNumber: 8,
    energy: "매우 좋음",
  },
  {
    keywords: { ko: ["임신", "태몽", "아기", "아이", "출산", "신생아"], en: ["baby", "infant", "pregnancy", "birth", "newborn", "child"] },
    title: { ko: "아기·임신 꿈", en: "Dream of a Baby" },
    interpretation: {
      ko: "아기가 나오는 꿈은 새로운 시작, 창조, 순수함을 상징합니다. 아기를 안는 꿈은 새로운 프로젝트나 계획이 순조롭게 진행됨을 나타냅니다. 아기가 울거나 아픈 꿈은 책임감에 대한 부담감을 반영합니다.",
      en: "A baby in a dream symbolizes new beginnings, creativity, and pure potential. Holding a baby suggests a new project or plan will go smoothly. A crying or sick baby reflects the weight of responsibility you are carrying in waking life.",
    },
    luckyColor: { ko: "분홍색", en: "Pink" },
    luckyNumber: 1,
    energy: "좋음",
  },
  {
    keywords: { ko: ["호랑이", "범", "백호"], en: ["tiger", "white tiger"] },
    title: { ko: "호랑이 꿈", en: "Dream of a Tiger" },
    interpretation: {
      ko: "호랑이는 용기, 권위, 강력한 힘의 상징입니다. 호랑이를 잡거나 타는 꿈은 강적을 제압하고 큰 성공을 거두는 최고의 길몽입니다. 호랑이에게 물리거나 쫓기는 꿈은 강한 경쟁자나 권위적인 인물과의 갈등을 암시합니다.",
      en: "The tiger embodies courage, authority, and formidable strength. Catching or riding a tiger is a supreme good omen — it means overpowering a fierce rival and achieving great success. Being bitten or chased warns of a conflict with a powerful competitor or authoritative figure in your life.",
    },
    luckyColor: { ko: "주황색", en: "Orange" },
    luckyNumber: 7,
    energy: "좋음",
  },
  {
    keywords: { ko: ["결혼", "웨딩", "혼인", "신랑", "신부"], en: ["wedding", "marriage", "bride", "groom", "ceremony"] },
    title: { ko: "결혼 꿈", en: "Dream of a Wedding" },
    interpretation: {
      ko: "결혼 꿈은 두 가지 요소의 통합과 새로운 출발을 상징합니다. 본인이 결혼하는 꿈은 중요한 계약, 합병, 또는 새로운 파트너십이 시작됨을 암시합니다. 타인의 결혼식에 참석하는 꿈은 주변의 경사를 함께하거나 자신도 좋은 인연을 맺게 됨을 의미합니다.",
      en: "A wedding dream symbolizes the union of two forces and the start of something new. Dreaming of your own wedding hints at an important contract, merger, or new partnership about to begin. Attending someone else's wedding suggests you will share in their joy or soon form a meaningful connection of your own.",
    },
    luckyColor: { ko: "흰색", en: "White" },
    luckyNumber: 2,
    energy: "좋음",
  },
  {
    keywords: { ko: ["비", "빗소리", "폭우", "소나기", "우산"], en: ["rain", "shower", "downpour", "umbrella", "rainfall"] },
    title: { ko: "비 오는 꿈", en: "Dream of Rain" },
    interpretation: {
      ko: "비는 정화와 감정의 해소를 상징합니다. 시원하게 쏟아지는 비를 맞는 꿈은 오랜 감정적 부담에서 해방되는 것을 의미합니다. 폭우 속에서 우산 없이 비를 맞는 꿈은 갑작스러운 어려움을 암시하지만 비가 그친 뒤 맑아지면 문제 해결을 나타냅니다.",
      en: "Rain symbolizes cleansing and emotional release. Enjoying a refreshing downpour means liberation from long-held emotional burdens. Getting caught in a storm without an umbrella hints at sudden hardship — but if the rain clears to sunshine, resolution and clarity are on the way.",
    },
    luckyColor: { ko: "파란색", en: "Blue" },
    luckyNumber: 6,
    energy: "보통",
  },
  {
    keywords: { ko: ["태양", "해", "햇빛", "일출", "석양"], en: ["sun", "sunrise", "sunlight", "solar", "dawn"] },
    title: { ko: "태양·해 꿈", en: "Dream of the Sun" },
    interpretation: {
      ko: "태양은 생명력, 성공, 권위의 상징입니다. 밝게 빛나는 태양을 보거나 태양을 품는 꿈은 큰 성공과 명예를 예고하는 최고의 길몽입니다. 해가 뜨는 일출을 보는 꿈은 새로운 시작과 희망을 의미합니다.",
      en: "The sun represents vitality, success, and authority. Gazing at a brilliantly shining sun or holding it in your arms is one of the greatest good omens, foretelling major success and honor. Watching a sunrise signals a fresh new beginning filled with hope.",
    },
    luckyColor: { ko: "노란색", en: "Yellow" },
    luckyNumber: 9,
    energy: "매우 좋음",
  },
  {
    keywords: { ko: ["달", "보름달", "달빛", "초승달"], en: ["moon", "full moon", "moonlight", "crescent"] },
    title: { ko: "달 꿈", en: "Dream of the Moon" },
    interpretation: {
      ko: "달은 직관, 감성, 여성성, 무의식을 상징합니다. 보름달을 보는 꿈은 소원 성취와 풍요를 의미합니다. 달을 품거나 따는 꿈은 귀한 자녀를 얻거나 큰 명예를 얻는 태몽 또는 길조입니다.",
      en: "The moon symbolizes intuition, emotion, femininity, and the unconscious. Seeing a full moon represents wish fulfillment and abundance. Holding or picking the moon from the sky is a powerful omen of gaining great honor, or a conception dream foretelling a remarkable child.",
    },
    luckyColor: { ko: "은색", en: "Silver" },
    luckyNumber: 4,
    energy: "좋음",
  },
  {
    keywords: { ko: ["별", "별빛", "별똥별", "유성", "은하수"], en: ["star", "shooting star", "meteor", "milky way", "starlight"] },
    title: { ko: "별·별똥별 꿈", en: "Dream of Stars" },
    interpretation: {
      ko: "별을 보는 꿈은 희망, 이상, 목표를 상징합니다. 별똥별이 떨어지는 것을 보며 소원을 비는 꿈은 소원이 이루어질 길조입니다. 별을 잡거나 품는 꿈은 큰 행운과 명예가 따르는 길몽입니다.",
      en: "Stars in dreams represent hope, ideals, and aspirations. Watching a shooting star and making a wish is an auspicious omen that your wish will come true. Catching or cradling a star in your hands foretells great fortune and recognition coming your way.",
    },
    luckyColor: { ko: "금색", en: "Gold" },
    luckyNumber: 5,
    energy: "매우 좋음",
  },
  {
    keywords: { ko: ["꽃", "장미", "벚꽃", "꽃밭", "꽃다발"], en: ["flower", "rose", "blossom", "bouquet", "petal", "bloom"] },
    title: { ko: "꽃 꿈", en: "Dream of Flowers" },
    interpretation: {
      ko: "꽃은 아름다움, 사랑, 번영의 상징입니다. 활짝 핀 꽃을 보거나 꽃다발을 받는 꿈은 사랑받고 있음을 느끼며 로맨틱한 관계나 좋은 대인관계를 예고합니다. 시들거나 떨어지는 꽃은 짧은 슬픔이나 이별을 암시합니다.",
      en: "Flowers symbolize beauty, love, and prosperity. Seeing flowers in full bloom or receiving a bouquet suggests you are loved and foreshadows a romantic connection or strong interpersonal bond. Wilting or falling petals hint at a brief period of sadness or a parting.",
    },
    luckyColor: { ko: "분홍색", en: "Pink" },
    luckyNumber: 3,
    energy: "좋음",
  },
  {
    keywords: { ko: ["나무", "숲", "고목", "나무열매"], en: ["tree", "forest", "woods", "fruit tree", "oak"] },
    title: { ko: "나무·숲 꿈", en: "Dream of Trees" },
    interpretation: {
      ko: "나무는 생명력, 성장, 뿌리를 상징합니다. 크고 무성한 나무는 건강과 번영을 의미하며, 열매가 달린 나무는 노력의 결실을 의미합니다. 나무가 쓰러지는 꿈은 가족 중 우환이나 사업 실패를 경고하니 주의가 필요합니다.",
      en: "Trees symbolize vitality, growth, and deep roots. A tall, lush tree represents health and prosperity. A fruit-laden tree signals the reward of your efforts coming to fruition. A falling tree is a warning — pay attention to a family member's health or a business venture at risk.",
    },
    luckyColor: { ko: "초록색", en: "Green" },
    luckyNumber: 8,
    energy: "좋음",
  },
  {
    keywords: { ko: ["산", "등산", "정상", "봉우리"], en: ["mountain", "summit", "peak", "climb", "hiking", "hill"] },
    title: { ko: "산·등산 꿈", en: "Dream of a Mountain" },
    interpretation: {
      ko: "산은 목표, 도전, 인생의 역경을 상징합니다. 산 정상에 오르는 꿈은 목표를 달성하고 성공을 거두는 최고의 길몽입니다. 산을 올라가는 꿈은 현재의 노력이 성과를 낼 것임을 의미합니다.",
      en: "Mountains symbolize goals, challenges, and the trials of life. Reaching the summit is one of the best good omens — it means your goals will be achieved and success is yours. Simply climbing a mountain signals that your current hard work will soon yield meaningful results.",
    },
    luckyColor: { ko: "초록색", en: "Green" },
    luckyNumber: 7,
    energy: "좋음",
  },
  {
    keywords: { ko: ["새", "비둘기", "독수리", "참새", "까마귀", "학"], en: ["bird", "eagle", "dove", "crane", "sparrow", "raven"] },
    title: { ko: "새 꿈", en: "Dream of Birds" },
    interpretation: {
      ko: "새는 자유, 영혼, 소식을 상징합니다. 밝고 아름다운 새는 좋은 소식이나 기쁜 일이 찾아올 징조입니다. 새가 집 안으로 들어오는 꿈은 횡재나 귀인을 만날 길조입니다. 독수리나 학처럼 고귀한 새는 명예와 출세를 의미합니다.",
      en: "Birds symbolize freedom, the soul, and messages. A bright, beautiful bird is an omen of good news and joyful events ahead. A bird flying into your home foretells unexpected good fortune or the arrival of an important benefactor. Noble birds like eagles or cranes signify honor and advancement.",
    },
    luckyColor: { ko: "파란색", en: "Blue" },
    luckyNumber: 2,
    energy: "좋음",
  },
  {
    keywords: { ko: ["물고기", "고기", "잉어", "금붕어", "낚시"], en: ["fish", "carp", "goldfish", "fishing", "salmon"] },
    title: { ko: "물고기 꿈", en: "Dream of Fish" },
    interpretation: {
      ko: "물고기는 재물과 풍요의 상징입니다. 크고 살찐 물고기를 잡거나 보는 꿈은 큰 재물이 들어올 길몽입니다. 맑은 물속 물고기 떼는 사업 번창이나 취업 성공을 의미합니다.",
      en: "Fish symbolize wealth and abundance. Catching or seeing a large, plump fish is a strong financial omen. A school of fish in clear water foretells thriving business or success in a job search. A carp transforming into a dragon is the ultimate omen of rising status.",
    },
    luckyColor: { ko: "파란색", en: "Blue" },
    luckyNumber: 6,
    energy: "매우 좋음",
  },
  {
    keywords: { ko: ["고양이", "길고양이", "새끼고양이", "냥이"], en: ["cat", "kitten", "feline", "stray cat"] },
    title: { ko: "고양이 꿈", en: "Dream of a Cat" },
    interpretation: {
      ko: "고양이는 직관, 신비, 독립심을 상징합니다. 귀여운 고양이를 쓰다듬는 꿈은 숨겨진 재능을 발휘할 기회가 올 것임을 의미합니다. 반면 고양이에게 할퀴거나 물리는 꿈은 주변의 배신이나 질투를 조심하라는 경고입니다.",
      en: "Cats symbolize intuition, mystery, and independence. Petting an adorable cat suggests an opportunity to showcase a hidden talent is approaching. Being scratched or bitten warns you to be cautious of betrayal or jealousy from someone in your circle.",
    },
    luckyColor: { ko: "보라색", en: "Purple" },
    luckyNumber: 4,
    energy: "보통",
  },
  {
    keywords: { ko: ["개", "강아지", "진돗개", "반려견"], en: ["dog", "puppy", "hound", "canine"] },
    title: { ko: "개·강아지 꿈", en: "Dream of a Dog" },
    interpretation: {
      ko: "개는 충성, 우정, 신뢰를 상징합니다. 활발하고 친근한 개가 나타나는 꿈은 믿을 수 있는 친구나 조력자가 나타날 것을 의미합니다. 개가 짖거나 공격하는 꿈은 주변에 적이 있거나 배신자를 조심해야 한다는 경고입니다.",
      en: "Dogs symbolize loyalty, friendship, and trust. A lively, friendly dog appearing in your dream means a reliable friend or helpful ally is about to enter your life. A barking or attacking dog warns that an adversary or potential betrayer may be lurking nearby.",
    },
    luckyColor: { ko: "갈색", en: "Brown" },
    luckyNumber: 5,
    energy: "보통",
  },
  {
    keywords: { ko: ["추락", "떨어지다", "낙하", "떨어지는"], en: ["falling", "fall", "drop", "plunge", "tumble"] },
    title: { ko: "추락·떨어지는 꿈", en: "Dream of Falling" },
    interpretation: {
      ko: "추락 꿈은 가장 보편적인 불안 꿈입니다. 심리적으로 통제력 상실, 실패에 대한 두려움, 불안정한 상황을 반영합니다. 높은 곳에서 떨어지는 꿈은 현재의 스트레스 수준이 높거나 중요한 결정을 앞두고 있다는 신호입니다.",
      en: "Falling is one of the most universal anxiety dreams. It reflects a psychological sense of losing control, fear of failure, or an unstable situation. Falling from a great height signals high stress levels or a looming major decision. Waking before you hit the ground shows your will to regain control.",
    },
    luckyColor: { ko: "보라색", en: "Purple" },
    luckyNumber: 1,
    energy: "주의",
  },
  {
    keywords: { ko: ["쫓기다", "쫓김", "도망", "도망치다", "추격"], en: ["chased", "chasing", "running away", "pursued", "escape", "flee"] },
    title: { ko: "쫓기는 꿈", en: "Dream of Being Chased" },
    interpretation: {
      ko: "누군가에게 쫓기는 꿈은 현실에서 피하고 싶은 상황이나 해결하지 못한 문제가 있음을 나타냅니다. 쫓는 존재가 알 수 없는 무언가라면 막연한 불안감, 특정 인물이라면 그 사람과의 갈등을 회피하고 있음을 의미합니다.",
      en: "Being chased indicates you are avoiding a situation or leaving a problem unresolved in waking life. An unknown pursuer represents vague, free-floating anxiety. A recognizable figure suggests you are steering clear of a real conflict with that person. Successfully hiding signals the problem will eventually be resolved.",
    },
    luckyColor: { ko: "회색", en: "Gray" },
    luckyNumber: 0,
    energy: "주의",
  },
  {
    keywords: { ko: ["시험", "수능", "시험지", "성적", "입시"], en: ["exam", "test", "quiz", "grade", "examination"] },
    title: { ko: "시험 꿈", en: "Dream of an Exam" },
    interpretation: {
      ko: "시험 꿈은 스스로를 평가받는 상황에 대한 불안을 반영합니다. 시험을 잘 보는 꿈은 목전의 중요한 평가나 면접에서 좋은 결과를 낼 것을 암시합니다. 시험지를 못 풀거나 늦는 꿈은 완벽주의와 실패에 대한 두려움을 나타냅니다.",
      en: "Exam dreams reflect anxiety about being evaluated or judged. Acing a test hints that an upcoming review, presentation, or interview will go well. Struggling to answer questions or arriving late reveals perfectionist tendencies and a deep fear of failure — a gentle reminder to be kinder to yourself.",
    },
    luckyColor: { ko: "파란색", en: "Blue" },
    luckyNumber: 3,
    energy: "보통",
  },
  {
    keywords: { ko: ["집", "새집", "이사", "고향집", "큰집"], en: ["house", "home", "moving", "new house", "mansion"] },
    title: { ko: "집 꿈", en: "Dream of a House" },
    interpretation: {
      ko: "집은 자아, 안정, 가족을 상징합니다. 새 집으로 이사하는 꿈은 인생의 새로운 단계 진입을 의미하며 좋은 변화의 길조입니다. 집이 무너지거나 불에 타는 꿈은 역설적으로 기존의 틀을 깨고 새로운 도약을 준비하는 시기임을 뜻합니다.",
      en: "A house represents the self, stability, and family. Moving into a new home signals the beginning of a new life chapter — a positive omen of change. Paradoxically, a crumbling or burning house often means you are ready to break free from old patterns and make a bold new leap forward.",
    },
    luckyColor: { ko: "갈색", en: "Brown" },
    luckyNumber: 9,
    energy: "좋음",
  },
  {
    keywords: { ko: ["자동차", "차", "운전", "교통사고", "버스", "기차"], en: ["car", "drive", "vehicle", "accident", "bus", "train", "crash"] },
    title: { ko: "자동차·이동 꿈", en: "Dream of a Vehicle" },
    interpretation: {
      ko: "탈것은 인생의 방향과 목표 추구 방식을 상징합니다. 능숙하게 운전하는 꿈은 인생의 주도권을 쥐고 목표를 향해 나아가는 상태를 의미합니다. 자동차 사고 꿈은 현재 속도를 조절하거나 계획을 재검토해야 한다는 경고입니다.",
      en: "Vehicles symbolize your direction in life and how you pursue your goals. Driving skillfully means you are in control and moving confidently toward your destination. A car accident warns you to slow down and reconsider your current plan. Failing brakes reflect anxiety about losing control of an important situation.",
    },
    luckyColor: { ko: "검정색", en: "Black" },
    luckyNumber: 4,
    energy: "주의",
  },
  {
    keywords: { ko: ["학교", "교실", "선생님", "공부", "칠판"], en: ["school", "classroom", "teacher", "study", "blackboard", "lecture"] },
    title: { ko: "학교 꿈", en: "Dream of School" },
    interpretation: {
      ko: "학교 꿈은 배움, 성장, 과거에 대한 회상을 상징합니다. 다시 학교에 다니는 꿈은 새로운 기술을 배우거나 자기 계발이 필요한 시점임을 나타냅니다. 선생님께 칭찬받는 꿈은 능력을 인정받을 길조입니다.",
      en: "School dreams symbolize learning, growth, and nostalgia for the past. Returning to school suggests it is time to acquire new skills or invest in self-development. Receiving praise from a teacher is an auspicious sign that your abilities will soon be recognized and rewarded.",
    },
    luckyColor: { ko: "파란색", en: "Blue" },
    luckyNumber: 6,
    energy: "보통",
  },
  {
    keywords: { ko: ["바다", "파도", "해변", "모래사장", "수영"], en: ["ocean", "sea", "beach", "wave", "swim", "shore"] },
    title: { ko: "바다·해변 꿈", en: "Dream of the Ocean" },
    interpretation: {
      ko: "바다는 무의식의 심층과 무한한 가능성을 상징합니다. 잔잔한 바다를 바라보는 꿈은 마음의 평화와 안정을 의미합니다. 거친 파도를 헤쳐나가는 꿈은 어려운 상황을 극복할 의지와 능력이 있음을 나타냅니다.",
      en: "The ocean symbolizes the depths of the unconscious and boundless possibility. Gazing at a calm sea reflects inner peace and stability. Pushing through crashing waves shows you have the will and capacity to overcome difficult circumstances. Diving deep hints at uncovering hidden truths about yourself.",
    },
    luckyColor: { ko: "청록색", en: "Teal" },
    luckyNumber: 7,
    energy: "좋음",
  },
  {
    keywords: { ko: ["귀신", "유령", "귀신집", "공포", "무서움"], en: ["ghost", "spirit", "haunted", "phantom", "specter"] },
    title: { ko: "귀신·유령 꿈", en: "Dream of a Ghost" },
    interpretation: {
      ko: "귀신 꿈은 해결되지 않은 과거, 억압된 감정이나 두려움을 상징합니다. 귀신에게 쫓기는 꿈은 과거의 후회나 해결되지 않은 감정적 문제가 현재에 영향을 주고 있음을 나타냅니다. 귀신과 대화하거나 평화롭게 공존하는 꿈은 과거와 화해하고 앞으로 나아가려는 의지를 상징합니다.",
      en: "Ghost dreams symbolize unresolved issues from the past, suppressed emotions, or lingering fears. Being chased by a ghost means past regrets or unresolved feelings are affecting your present life. Talking with or peacefully coexisting with a ghost symbolizes your readiness to make peace with the past and move forward.",
    },
    luckyColor: { ko: "보라색", en: "Purple" },
    luckyNumber: 2,
    energy: "주의",
  },
];

export const defaultInterpretation = {
  title: { ko: "심층 심리 분석", en: "Deep Psychological Reading" },
  interpretation: {
    ko: "꿈의 내용에서 특정 상징을 찾기 어렵지만, 꿈 자체가 중요한 메시지를 담고 있습니다. 꿈에서 느꼈던 주된 감정(기쁨, 불안, 평화, 두려움 등)에 집중해 보세요. 긍정적인 감정의 꿈은 현재 삶의 방향이 올바름을 의미하고, 불안이나 두려움의 꿈은 현실에서 해결해야 할 감정적 과제가 있음을 나타냅니다.",
    en: "No specific symbol could be identified, but your dream still carries a meaningful message. Focus on the dominant emotion you felt — joy, anxiety, peace, or fear. Dreams with positive emotions affirm you are on the right path. Dreams filled with unease signal an emotional challenge in waking life that deserves your attention.",
  },
  luckyColor: { ko: "보라색", en: "Purple" },
  luckyNumber: 7,
  energy: "보통" as const,
};

export function analyzeDream(input: string, lang: Lang): DreamEntry {
  const normalized = input.toLowerCase();
  for (const entry of dreamData) {
    if (entry.keywords[lang].some((kw) => normalized.includes(kw))) {
      return entry;
    }
  }
  return { keywords: { ko: [], en: [] }, ...defaultInterpretation };
}
