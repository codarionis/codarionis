const prayers = {
en: {
  signOfTheCross: `In the name of the Father, and of the Son, and of the Holy Spirit. Amen.`,

  apostlesCreed: `<strong>V.</strong> I believe in God, the Father Almighty, Creator of heaven and earth;  
and in Jesus Christ, His only Son, our Lord;  
who was conceived by the Holy Spirit, born of the Virgin Mary,  
suffered under Pontius Pilate, was crucified, died, and was buried;  
He descended into hell; on the third day He rose again from the dead;  
He ascended into heaven, and is seated at the right hand of God the Father Almighty;  
from there He will come to judge the living and the dead.  
I believe in the Holy Spirit, the holy Catholic Church,  
the communion of saints, the forgiveness of sins,  
the resurrection of the body, and life everlasting. Amen.`,

  ourFather: `<strong>V.</strong> Our Father, who art in heaven,  
hallowed be Thy name;  
Thy kingdom come;  
Thy will be done on earth as it is in heaven.<br>
<strong>R.</strong> Give us this day our daily bread;  
and forgive us our trespasses,  
as we forgive those who trespass against us;  
and lead us not into temptation,  
but deliver us from evil. Amen.`,

  hailMary: `<strong>V.</strong> Hail Mary, full of grace,  
the Lord is with thee;  
blessed art thou among women,  
and blessed is the fruit of thy womb, Jesus. <br>
<strong>R.</strong> Holy Mary, Mother of God,  
pray for us sinners,  
now and at the hour of our death. Amen.`,

  gloryBe: `<strong>V.</strong> Glory be to the Father,  
and to the Son,  
and to the Holy Spirit,<br>
<strong>R.</strong> as it was in the beginning, is now, and ever shall be,  
world without end. Amen.`,

  fatima: `O my Jesus, forgive us our sins,  
save us from the fires of hell,  
lead all souls to Heaven,  
especially those who are in most need of thy mercy. Amen.`,

  hailHolyQueen: `Hail, holy Queen, Mother of mercy,  
our life, our sweetness, and our hope.  
To thee do we cry, poor banished children of Eve;  
to thee do we send up our sighs, mourning and weeping in this valley of tears.  
Turn then, most gracious Advocate, thine eyes of mercy toward us;  
and after this our exile, show unto us the blessed fruit of thy womb, Jesus.  
O clement, O loving, O sweet Virgin Mary.`,

  closingDialogue: `<strong>V.</strong> Pray for us, O holy Mother of God.<br>
<strong>R.</strong> That we may be made worthy of the promises of Christ.`,

  closingPrayer: `Let us pray:  
O God, whose only begotten Son, by His life, death, and resurrection,  
has purchased for us the rewards of eternal life;  
grant, we beseech You,  
that by meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary,  
we may imitate what they contain and obtain what they promise,  
through the same Christ our Lord. Amen.`,

//New prayers added for the deceased mode
  forDeceasedIntention: `<strong>V.</strong> Let us offer this Holy Rosary for the eternal rest of (name).<br>
<strong>R.</strong> Tay the Lord guide our thoughts, bless our words, and fill our hearts.`,

  prayerForTheFaithfulDeparted: `<strong>V.</strong> Eternal rest grant unto (him/her), O Lord.<br>
<strong>R.</strong> And let perpetual light shine upon (him/her).<br>
<strong>V.</strong> May (he/she) rest in peace.<br>
<strong>R.</strong> Amen.`,

  litanyOfTheBlessedVirginMary: `<strong>V.</strong> Lord, have mercy on us.<br>
<strong>R.</strong> Lord, have mercy on us.<br>
<strong>V.</strong> Christ, have mercy on us.<br>
<strong>R.</strong> Christ, have mercy on us.<br>
<strong>V.</strong> Lord, have mercy on us.<br>
<strong>R.</strong> Lord, have mercy on us.<br>

<strong>V.</strong> Christ, hear us.<br>
<strong>R.</strong> Christ, hear us.<br>
<strong>V.</strong> Christ, graciously hear us.<br>
<strong>R.</strong> Christ, graciously hear us.<br>

<strong>V.</strong> God the Father of Heaven,<br>
<strong>R.</strong> Have mercy on us.<br>
<strong>V.</strong> God the Son, Redeemer of the world,<br>
<strong>R.</strong> Have mercy on us.<br>
<strong>V.</strong> God the Holy Ghost,<br>
<strong>R.</strong> Have mercy on us.<br>
<strong>V.</strong> Holy Trinity, one God,<br>
<strong>R.</strong> Have mercy on us.<br>

<strong>V.</strong> Holy Mary,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Holy Mother of God,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Holy Virgin of virgins,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mother of Christ,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mother of divine grace,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mother most pure,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mother most chaste,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mother inviolate,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mother undefiled,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mother most amiable,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mother most admirable,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mother of good counsel,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mother of our Creator,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mother of our Savior,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Virgin most prudent,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Virgin most venerable,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Virgin most renowned,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Virgin most powerful,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Virgin most merciful,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Virgin most faithful,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mirror of justice,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Seat of wisdom,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Cause of our joy,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Spiritual vessel,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Vessel of honor,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Singular vessel of devotion,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Mystical rose,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Tower of David,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Tower of ivory,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> House of gold,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Ark of the Covenant,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Gate of Heaven,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Morning star,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Health of the sick,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Refuge of sinners,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Comforter of the afflicted,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Help of Christians,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Queen of angels,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Queen of patriarchs,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Queen of prophets,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Queen of apostles,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Queen of martyrs,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Queen of confessors,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Queen of virgins,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Queen of all saints,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Queen conceived without Original Sin,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Queen assumed into Heaven,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Queen of the most holy Rosary,<br>
<strong>R.</strong> pray for us.<br>
<strong>V.</strong> Queen of peace,<br>
<strong>R.</strong> pray for us.<br>

<strong>V.</strong> Lamb of God, who takes away the sins of the world,<br>
<strong>R.</strong> Spare us, O Lord.<br>
<strong>V.</strong> Lamb of God, who takes away the sins of the world,<br>
<strong>R.</strong> Graciously hear us, O Lord.<br>
<strong>V.</strong> Lamb of God, who takes away the sins of the world,<br>
<strong>R.</strong> Have mercy on us.<br>

<strong>V.</strong> Pray for us, O Holy Mother of God,<br>
<strong>R.</strong> That we may be made worthy of the promises of Christ.<br>
<strong>V.</strong> Grant, we beseech Thee, O Lord God, that we Thy Servants may enjoy perpetual health of mind and body and by the glorious intercession of the Blessed Mary, ever Virgin, be delivered from present sorrow and enjoy eternal happiness.<br>
<strong>R.</strong> Through Christ Our Lord. Amen.`,

  concludingPrayerForTheDeceased: `Lord, in Your mercy, hear our prayer for the soul of (name). May (he/she) rest in Your peace and rise with You in glory. Amen.`,

//New prayers added for the one decade mode
  yourIntention: `State your personal intention for this rosary.`,

},

vi: {
  signOfTheCross: `Nhân danh Cha, và Con, và Thánh Thần. Amen.`,

  apostlesCreed: `Tôi tin kính Ðức Chúa Trời là Cha phép tắc vô cùng dựng nên trời đất. Tôi tin kính Ðức Chúa Giêsu Kitô là con một Ðức Chúa Cha cùng là Chúa chúng tôi. Bởi phép Ðức Chúa Thánh Thần mà Người xuống thai sinh bởi Bà Maria Ðồng Trinh; Chịu nạn đời quan Phong-Xi-ô Philatô, chịu đóng đanh trên cây Thánh Giá, chết và táng xác, xuống ngục tổ tông; Ngày thứ ba bởi trong kẻ chết mà sống lại lên Trời ngự bên hữu Ðức Chúa Cha phép tắc vô cùng; Ngày sau bởi trời lại xuống phán xét kẻ sống và kẻ chết.

Tôi tin kính Ðức Chúa Thánh Thần. Tôi tin có hội thánh hằng có ở khắp thế này, các Thánh thông công. Tôi tin phép tha tội. Tôi tin xác loài người ngày sau sống lại. Tôi tin hằng sống vậy. Amen.`,

  ourFather: `<strong>V.</strong> Lạy Cha chúng con ở trên Trời chúng con nguyện danh Cha cả sáng, nước Cha trị đến, ý cha thể hiện dưới đất cũng như trên trời.<br>
<strong>Đ.</strong> Xin Cha cho chúng con hôm nay lương thực hằng ngày, và tha nợ chúng con, như chúng con cũng tha kẻ có nợ chúng con, xin chớ để chúng con sa chước cám dỗ, nhưng cứu chúng con cho khỏi sự dữ. Amen.`,

  hailMary: `<strong>V.</strong> Kính mừng Maria đầy ơn phước, Ðức Chúa Trời ở cùng Bà, Bà có phúc lạ, hơn mọi người Nữ, và Giêsu con lòng Bà gồm phúc lạ.<br>
<strong>Đ.</strong> Thánh Maria Ðức Mẹ Chúa Trời cầu cho chúng con là kẻ có tội, khi này và trong giờ lâm tử. Amen.`,

  gloryBe: `<strong>V.</strong> Sáng danh Ðức Chúa Cha và Ðức Chúa Con và Ðức Chúa Thánh Thần,<br>
<strong>Đ.</strong> như đã có trước vô cùng và bây giờ và hằng có và đời đời chẳng cùng. Amen.`,

  fatima: `Lậy Chúa Giêsu, xin tha tội cho chúng con. Xin cứu chúng con khỏi sa hỏa ngục, xin đưa các linh hồn lên Thiên đàng, nhất là những linh hồn cần thêm lòng thương xót Chúa hơn. Amen.`,

  hailHolyQueen: `Lạy Nữ Vương, Mẹ nhân lành làm cho chúng con được sống, được vui, được cậy, thân lạy Mẹ, chúng con, con cháu Evà, ở chốn khách đầy, kêu khẩn Bà thương. Hỡi ơi! Bà là Chúa bầu chúng con, xin ghé mặt thương xem chúng con. Ðến sau khỏi đầy. Xin cho chúng con được thấy Ðức Chúa Giêsu, con lòng Bà gồm phúc lạ. Ôi khoan thay, nhân thay, dịu thay Thánh Maria trọn đời đồng trinh. Amen.`,

  closingDialogue: `<strong>V.</strong> Cầu cho chúng con, Mẹ Thiên Chúa.<br>
<strong>Đ.</strong> Để chúng con được xứng đáng với những lời hứa của Đức Kitô.`,

  closingPrayer: `Lạy Thiên Chúa, Đấng đã ban Con Một duy nhất của Ngài  
Qua cuộc sống, cái chết và sự phục sinh để chuộc tội cho chúng con;  
Xin cho chúng con nhờ suy niệm các mầu nhiệm Mân Côi của Mẹ Maria,  
Bắt chước những gì chúng chứa đựng và được hưởng những lời hứa,  
Nhờ chính Đức Kitô, Chúa chúng con. Amen.`,
},
tl: {
  signOfTheCross: `Sa ngalan ng Ama, at ng Anak, at ng Espiritu Santo. Amen.`,

  apostlesCreed: `Sumasampalataya ako sa Diyos Amang makapangyarihan sa lahat, na may gawa ng langit at lupa.  
At kay Hesukristo, iisang Anak ng Diyos, Panginoon natin.  
Nagkatawang-tao Siya lalang ng Espiritu Santo, ipinanganak ni Santa Mariang Birhen.  
Nagpakasakit Siya sa ilalim ni Poncio Pilato, ipinako sa krus, namatay at inilibing.  
Nan descendió siya sa mga yumao, nang ikatlong araw ay muling nabuhay.  
Umakyat siya sa langit, naluluklok sa kanan ng Diyos Amang makapangyarihan sa lahat.  
Mula roo’y paririto Siya’t huhukom sa mga buhay at mga patay.  
Sumasampalataya ako sa Espiritu Santo, sa banal na Simbahang Katolika,  
sa kasamahan ng mga banal, sa kapatawaran ng mga kasalanan,  
sa pagkabuhay na muli ng mga namatay, at sa buhay na walang hanggan. Amen.`,

  ourFather: `Ama namin, sumasalangit Ka,  
Sambahin ang ngalan Mo.  
Mapasaamin ang kaharian Mo.  
Sundin ang loob Mo, dito sa lupa para nang sa langit.  
Bigyan Mo kami ngayon ng aming kakanin sa araw-araw.  
At patawarin Mo kami sa aming mga sala,  
para nang pagpapatawad namin sa mga nagkakasala sa amin.  
At huwag Mo kaming ipahintulot sa tukso,  
kundi iligtas Mo kami sa lahat ng masama. Amen.`,

  hailMary: `Aba Ginoong Maria, napupuno ka ng grasya,  
ang Panginoon ay sumasaiyo;  
pinagpala ka sa babaeng lahat,  
at pinagpala naman ang iyong anak na si Hesus.  
Santa Maria, Ina ng Diyos,  
ipanalangin mo kaming makasalanan,  
ngayon at kung kami’y mamamatay. Amen.`,

  gloryBe: `Luwalhati sa Ama, at sa Anak, at sa Espiritu Santo,  
gaya noong una, ngayon at magpakailanman. Amen.`,

  fatima: `O Hesus ko, patawarin Mo kami sa aming mga sala,  
iligtas Mo kami sa apoy ng impiyerno,  
dalhin Mo sa langit ang lahat ng kaluluwa,  
lalo na ang mga higit na nangangailangan ng Iyong awa. Amen.`,

  hailHolyQueen: `Aba Po, Santa Mariang Hari, Ina ng Awa,  
buhay, tamis, at pag-asa namin, aba Ginoo.  
Sa Iyo kami sumisigaw, mga anak ni Eva,  
Sa Iyo kami dumaraing, humihibik sa gitna ng lupang ito ng pagluha.  
Ibaling Mo sa amin ang Iyong mga matang maawain,  
at pagkatapos ng pagkakait sa amin,  
ipakita Mo sa amin si Hesus, ang mapagpalang bunga ng Iyong sinapupunan.  
O maawain, o mahinahon, o matamis na Birheng Maria.`,

  closingDialogue: `<strong>V.</strong> Ipanalangin mo kami, O Banal na Ina ng Diyos.  
<strong>R.</strong> Nang kami’y maging karapat-dapat sa mga pangako ni Kristo.`,

  closingPrayer: `Manalangin tayo:  
O Diyos, na sa pamamagitan ng buhay, pagkamatay, at muling pagkabuhay ng Iyong Bugtong na Anak,  
ay ipinagkaloob Mo sa amin ang gantimpala ng buhay na walang hanggan;  
ipagkaloob Mo, isinasamo namin,  
na sa pagninilay namin sa mga Misteryo ng Banal na Rosaryo  
ng Mahal na Birheng Maria,  
ay maisabuhay namin ang mga nilalaman nito  
at matamo ang mga ipinangako nito.  
Sa pamamagitan ni Hesukristo, aming Panginoon. Amen.`
  }
};


const titles = {
  en: {
    signOfTheCross: "Sign of the Cross",
    apostlesCreed: "Apostles' Creed",
    ourFather: "Our Father",
    threeHailMarys: "3 Hail Marys (Faith, Hope, and Charity)",
    gloryBe: "Glory Be",
    mystery: "Mystery",
    tenHailMarys: "10 Hail Marys",
    fatimaPrayer: "Fatima Prayer",
    hailHolyQueen: "Hail Holy Queen",
    closingDialogue: "Closing Dialogue",
    closingPrayer: "Closing Prayer",
    signOfTheCross: "Sign of the Cross",
    forDeceasedIntention: "Intention",
    prayerForTheFaithfulDeparted: "Prayer For The Faithful Departed",
    litanyOfTheBlessedVirginMary: "Litany Of The Blessed Virgin Mary",
    concludingPrayerForTheDeceased: "Concluding Prayer For The Deceased",
    yourIntention: "Your Personal Intention"
  },
  vi: {
    signOfTheCross: "Dấu Thánh Giá",
    apostlesCreed: "Kinh Tin Kính",
    ourFather: "Kinh Lạy Cha",
    threeHailMarys: "3 Kinh Kính Mừng (Đức Tin, Đức Cậy, và Đức Mến)",
    gloryBe: "Kinh Sáng Danh",
    mystery: "Mầu Nhiệm",
    tenHailMarys: "10 Kinh Kính Mừng",
    fatimaPrayer: "Kinh Fatima",
    hailHolyQueen: "Kinh Kính Mừng Nữ Vương",
    closingDialogue: "Đoạn Kết",
    closingPrayer: "Kinh Cầu Kết",
    signOfTheCross: "Dấu Thánh Giá"
  },
  tl: {
    signOfTheCross: "Tanda ng Krus",
    apostlesCreed: "Sumasampalataya Ako",
    ourFather: "Ama Namin",
    threeHailMarys: "3 Aba Ginoong Maria (Pananampalataya, Pag-asa, at Pag-ibig)",
    gloryBe: "Luwalhati sa Ama",
    mystery: "Misteryo",
    tenHailMarys: "Sampung Aba Ginoong Maria",
    fatimaPrayer: "Dasal ng Fatima",
    hailHolyQueen: "Aba Po, Santa Mariang Hari",
    closingDialogue: "Panalangin sa Wakas",
    closingPrayer: "Pangwakas na Panalangin",
    signOfTheCross: "Tanda ng Krus"
  }
};

const mysteriesByDay = {
  Monday: "Joyful",
  Tuesday: "Sorrowful",
  Wednesday: "Glorious",
  Thursday: "Luminous",
  Friday: "Sorrowful",
  Saturday: "Joyful",
  Sunday: "Glorious"
};

const mysteryCategories = {
  en: {
    Joyful: "Joyful",
    Sorrowful: "Sorrowful",
    Glorious: "Glorious",
    Luminous: "Luminous"
  },
  vi: {
    Joyful: "Mầu Nhiệm Vui",
    Sorrowful: "Mầu Nhiệm Thương",
    Glorious: "Mầu Nhiệm Mừng",
    Luminous: "Mầu Nhiệm Sáng"
  },
  tl: {
    Joyful: "Misteryong Masaya",
    Sorrowful: "Misteryong Malungkot",
    Glorious: "Misteryong Maluwalhati",
    Luminous: "Misteryong Liwanag"
  }
};

const mysteryMeditations = {
  en: {
    Joyful: [
      {
        title: "The Annunciation",
        scripture: "“In the sixth month, the angel Gabriel was sent from God to a town of Galilee called Nazareth, to a virgin betrothed to a man named Joseph, of the house of David, and the virgin’s name was Mary.” — Luke 1:26-27",
        reflection: "Mary humbly accepts God's plan, showing faith and obedience. We pray for humility and readiness to serve God.",
        fruit: "Fruit of the Mystery: Humility"
      },
      {
        title: "The Visitation",
        scripture: "“During those days Mary set out and traveled to the hill country in haste to a town of Judah, where she entered the house of Zechariah and greeted Elizabeth.” — Luke 1:39-40",
        reflection: "Mary visits Elizabeth to share joy and help. This mystery teaches us to love our neighbor and be helpful.",
        fruit: "Fruit of the Mystery: Love of Neighbor"
      },
      {
        title: "The Nativity",
        scripture: "“She gave birth to her firstborn son and wrapped him in swaddling clothes, and laid him in a manger because there was no room for them in the inn.” — Luke 2:7",
        reflection: "Jesus was born in poverty, showing God’s love and humility. We are called to live poverty of spirit and welcome Jesus with faith.",
        fruit: "Fruit of the Mystery: Poverty of Spirit"
      },
      {
        title: "The Presentation",
        scripture: "“When the days for their purification according to the law of Moses were completed, they brought him up to Jerusalem to present him to the Lord.” — Luke 2:22",
        reflection: "Mary and Joseph present Jesus in the temple, showing obedience and dedication. This mystery reminds us to obey and be faithful in our duties.",
        fruit: "Fruit of the Mystery: Obedience"
      },
      {
        title: "The Finding of Jesus in the Temple",
        scripture: "“After three days they found him in the temple, sitting among the teachers, listening to them and asking them questions.” — Luke 2:46",
        reflection: "Jesus, even as a child, was eager to learn and fulfill his mission. We are reminded to seek Jesus with joy and persistence, especially when we feel lost or confused in our faith journey.",
        fruit: "Fruit of the Mystery: Joy in Finding Jesus"
      }
    ],
Sorrowful: [
      {
        title: "The Agony in the Garden",
        scripture: "“He began to be sorrowful and troubled.” — Matthew 26:37-38",
        reflection: "Jesus accepts God's will in his suffering. We pray for courage in our own trials.",
        fruit: "Fruit of the Mystery: Contrition"
      },
      {
        title: "The Scourging at the Pillar",
        scripture: "“Pilate had Jesus flogged.” — John 19:1",
        reflection: "Jesus endures pain for our sins. We pray for purity and self-control.",
        fruit: "Fruit of the Mystery: Purity"
      },
      {
        title: "The Crowning with Thorns",
        scripture: "“They placed a crown of thorns on his head.” — Matthew 27:29",
        reflection: "Jesus accepts humiliation. We pray for humility and patience.",
        fruit: "Fruit of the Mystery: Moral Courage"
      },
      {
        title: "The Carrying of the Cross",
        scripture: "“He carried his cross to the place of crucifixion.” — John 19:17",
        reflection: "Jesus carries our burdens. We pray for strength to carry our crosses.",
        fruit: "Fruit of the Mystery: Perseverance"
      },
      {
        title: "The Crucifixion",
        scripture: "“Jesus died on the cross for us.” — John 19:30",
        reflection: "Jesus gives his life for salvation. We pray for salvation and love.",
        fruit: "Fruit of the Mystery: Salvation"
      }
    ],
    Glorious: [
      {
        title: "The Resurrection",
        scripture: "“He is not here; he has risen!” — Luke 24:6",
        reflection: "Jesus conquers death and opens heaven. We pray for faith and hope.",
        fruit: "Fruit of the Mystery: Faith"
      },
      {
        title: "The Ascension",
        scripture: "“Jesus was taken up into heaven.” — Luke 24:51",
        reflection: "Jesus returns to the Father and prepares for the Spirit. We pray for longing for heaven.",
        fruit: "Fruit of the Mystery: Hope"
      },
      {
        title: "The Descent of the Holy Spirit",
        scripture: "“They were all filled with the Holy Spirit.” — Acts 2:4",
        reflection: "The Spirit empowers the Church. We pray for the gifts of the Holy Spirit.",
        fruit: "Fruit of the Mystery: Charity"
      },
      {
        title: "The Assumption",
        scripture: "Mary was taken body and soul into heavenly glory. — Tradition",
        reflection: "Mary is honored as Queen of Heaven. We pray for grace to follow her example.",
        fruit: "Fruit of the Mystery: Grace of a Happy Death"
      },
      {
        title: "The Coronation of Mary",
        scripture: "Mary is crowned Queen of Heaven and Earth. — Tradition",
        reflection: "Mary is crowned Queen of Heaven and Earth. We pray for devotion to Mary.",
        fruit: "Fruit of the Mystery: Trust in Mary’s Intercession"
      }
    ],
    Luminous: [
      {
        title: "The Baptism of Jesus in the Jordan",
        scripture: "“As soon as Jesus was baptized, he went up out of the water.” — Matthew 3:16-17",
        reflection: "Jesus begins his public ministry. We pray for the grace of baptism.",
        fruit: "Fruit of the Mystery: Openness to the Holy Spirit"
      },
      {
        title: "The Wedding at Cana",
        scripture: "“Jesus performed his first miracle, turning water into wine.” — John 2:1-11",
        reflection: "Jesus reveals his glory and compassion. We pray for faith in Jesus’ power.",
        fruit: "Fruit of the Mystery: To Jesus through Mary"
      },
      {
        title: "Jesus Proclaims the Kingdom of God",
        scripture: "“Repent, for the kingdom of heaven is at hand.” — Matthew 4:17",
        reflection: "Jesus calls us to conversion and faith. We pray for conversion of heart.",
        fruit: "Fruit of the Mystery: Repentance and Trust in God"
      },
      {
        title: "The Transfiguration",
        scripture: "“His face shone like the sun.” — Matthew 17:2",
        reflection: "Jesus reveals his divine glory. We pray for courage to witness our faith.",
        fruit: "Fruit of the Mystery: Desire for Holiness"
      },
      {
        title: "The Institution of the Holy Eucharist",
        scripture: "“This is my body given for you.” — Luke 22:19-20",
        reflection: "Jesus gives himself to us in the Eucharist. We pray for love and reverence for the Eucharist.",
        fruit: "Fruit of the Mystery: Adoration"
      }
    ]
  },
  vi: {
    Joyful: [
      {
        title: "Truyền Tin",
        scripture: "“Trong tháng thứ sáu, thiên thần Gabriel được Thiên Chúa sai đến một thành ở Galilê tên là Nazareth, đến với một trinh nữ tên Maria, đính hôn với ông Giuse, thuộc dòng dõi vua Đavít.” — Luca 1:26-27",
        reflection: "Maria khiêm nhường nhận lời theo kế hoạch của Thiên Chúa. Mẹ có đức tin và vâng lời tuyệt đối. Chúng ta cầu xin ơn khiêm nhường và sẵn sàng phục vụ Thiên Chúa như Mẹ.",
        fruit: "Hoa trái của Mầu Nhiệm: Khiêm Nhường"
      },
      {
        title: "Viếng Thăm Bà Elisabeth",
        scripture: "“Trong những ngày ấy, Maria vội lên miền núi, vào một thành ở Giuđa, vào nhà ông Giakêu và chào bà Êlisabeth.” — Luca 1:39-40",
        reflection: "Maria đến thăm bà Elisabeth để chia sẻ niềm vui và giúp đỡ. Mầu nhiệm này dạy ta biết yêu thương người lân cận và giúp đỡ tha nhân.",
        fruit: "Hoa trái của Mầu Nhiệm: Yêu Thương Người Lân Cận"
      },
      {
        title: "Chúa Giêsu Giáng Sinh",
        scripture: "“Bà sinh con trai đầu lòng, bọc trong khăn và đặt nằm trong máng cỏ, vì không có chỗ cho họ trong nhà trọ.” — Luca 2:7",
        reflection: "Chúa Giêsu sinh ra trong cảnh nghèo hèn, thể hiện tình yêu và sự khiêm tốn của Thiên Chúa. Chúng ta được gọi mời sống nghèo tinh thần và đón nhận Chúa bằng đức tin.",
        fruit: "Hoa trái của Mầu Nhiệm: Nghèo Trong Tâm Hồn"
      },
      {
        title: "Dâng Chúa Giêsu Trong Đền Thờ",
        scripture: "“Khi đến ngày thanh tẩy, theo luật Môsê, họ đem Chúa Giêsu lên Giêrusalem để dâng cho Chúa.” — Luca 2:22",
        reflection: "Maria và Giuse dâng Chúa Giêsu trong đền thờ, thể hiện sự vâng phục và tận hiến với Thiên Chúa. Mầu nhiệm này nhắc ta phải vâng lời và trung thành trong bổn phận.",
        fruit: "Hoa trái của Mầu Nhiệm: Vâng Phục"
      },
      {
        title: "Tìm Thấy Chúa Giêsu Trong Đền Thờ",
        scripture: "“Sau ba ngày, họ tìm thấy Người trong đền thờ, ngồi giữa các thầy dạy, lắng nghe và hỏi họ.” — Luca 2:46",
        reflection: "Chúa Giêsu dù còn nhỏ vẫn ham hiểu biết và thực hiện sứ mệnh. Chúng ta được nhắc phải tìm kiếm Chúa bằng niềm vui và kiên trì, đặc biệt khi ta cảm thấy lạc lối.",
        fruit: "Hoa trái của Mầu Nhiệm: Niềm Vui Tìm Thấy Chúa"
      }
    ],
Sorrowful: [
      {
        title: "Đau Khổ Trong Vườn Cây Dầu",
        scripture: "“Ngài bắt đầu sầu muộn và buồn bã.” — Matthew 26:37-38",
        reflection: "Chúa Giêsu chấp nhận ý muốn Chúa Cha trong đau khổ. Chúng ta cầu xin lòng can đảm trong thử thách.",
        fruit: "Hoa trái của Mầu Nhiệm: Ăn Năn Sám Hối"
      },
      {
        title: "Chúa Giêsu Bị Đánh Đòn",
        scripture: "“Philatô ra lệnh đánh đòn Chúa Giêsu.” — John 19:1",
        reflection: "Chúa Giêsu chịu đau đớn vì tội lỗi chúng ta. Chúng ta cầu xin sự trong sạch và kiềm chế.",
        fruit: "Hoa trái của Mầu Nhiệm: Sự Trong Sạch"
      },
      {
        title: "Chúa Giêsu Đội Vương Miện Tội Nhân",
        scripture: "“Họ đặt lên đầu Ngài một vương miện bằng gai.” — Matthew 27:29",
        reflection: "Chúa Giêsu chịu sỉ nhục. Chúng ta cầu xin đức khiêm nhường và kiên nhẫn.",
        fruit: "Hoa trái của Mầu Nhiệm: Lòng Can Đảm Đạo Đức"
      },
      {
        title: "Chúa Giêsu Mang Thập Giá",
        scripture: "“Ngài mang thập giá đến nơi chịu đóng đinh.” — John 19:17",
        reflection: "Chúa Giêsu mang gánh nặng cho chúng ta. Chúng ta cầu xin sức mạnh mang thập giá đời mình.",
        fruit: "Hoa trái của Mầu Nhiệm: Kiên Trì"
      },
      {
        title: "Chúa Giêsu Chịu Đóng Đinh",
        scripture: "“Chúa Giêsu chết trên thập giá vì chúng ta.” — John 19:30",
        reflection: "Chúa Giêsu hy sinh mạng sống để cứu độ. Chúng ta cầu xin ơn cứu rỗi và yêu thương.",
        fruit: "Hoa trái của Mầu Nhiệm: Sự Cứu Rỗi"
      }
    ],
    Glorious: [
      {
        title: "Phục Sinh",
        scripture: "“Ngài không còn ở đây, vì Ngài đã sống lại!” — Luke 24:6",
        reflection: "Chúa Giêsu chiến thắng tử thần và mở đường lên trời. Chúng ta cầu xin đức tin và hy vọng.",
        fruit: "Hoa trái của Mầu Nhiệm: Đức Tin"
      },
      {
        title: "Chúa Giêsu Lên Trời",
        scripture: "“Chúa Giêsu được đưa lên trời.” — Luke 24:51",
        reflection: "Chúa trở về cùng Cha và chuẩn bị Thánh Thần. Chúng ta cầu xin khao khát thiên đàng.",
        fruit: "Hoa trái của Mầu Nhiệm: Hy Vọng"
      },
      {
        title: "Chúa Thánh Thần Xuống",
        scripture: "“Mọi người đều đầy Thánh Thần.” — Acts 2:4",
        reflection: "Thánh Thần ban sức mạnh cho Hội Thánh. Chúng ta cầu xin ơn Thánh Thần.",
        fruit: "Hoa trái của Mầu Nhiệm: Đức Ái"
      },
      {
        title: "Mẹ Maria Lên Trời",
        scripture: "Maria được đưa lên trời cả hồn lẫn xác. — Truyền thống",
        reflection: "Mẹ Maria được tôn vinh là Nữ Vương trời đất. Chúng ta cầu xin ơn sống thánh thiện theo gương Mẹ.",
        fruit: "Hoa trái của Mầu Nhiệm: Ơn Chết Lành"
      },
      {
        title: "Mẹ Maria Được Vương Miện",
        scripture: "Maria được trao vương miện Nữ Vương trời đất. — Truyền thống",
        reflection: "Mẹ Maria được tôn vinh và là Đấng Bầu Cử cho chúng ta. Chúng ta cầu xin lòng tín thác nơi Mẹ.",
        fruit: "Hoa trái của Mầu Nhiệm: Tín Thác Vào Mẹ Maria"
      }
    ],
    Luminous: [
      {
        title: "Rửa Tội của Chúa Giêsu tại sông Jordan",
        scripture: "“Ngay khi Chúa Giêsu được rửa tội, Ngài lên khỏi nước.” — Matthew 3:16-17",
        reflection: "Chúa Giêsu bắt đầu sứ vụ công khai. Chúng ta cầu xin ơn rửa tội và đón nhận Thánh Thần.",
        fruit: "Hoa trái của Mầu Nhiệm: Sẵn Sàng Đón Nhận Thánh Thần"
      },
      {
        title: "Tiệc Cưới Cana",
        scripture: "“Chúa Giêsu làm phép lạ đầu tiên, biến nước thành rượu.” — John 2:1-11",
        reflection: "Chúa Giêsu tỏ mình ra và thương xót. Chúng ta cầu xin đức tin và lòng cậy trông nơi Ngài.",
        fruit: "Hoa trái của Mầu Nhiệm: Qua Maria đến với Chúa Giêsu"
      },
      {
        title: "Chúa Giêsu Rao Giảng Nước Thiên Chúa",
        scripture: "“Hãy ăn năn, vì Nước Thiên Chúa đã đến gần.” — Matthew 4:17",
        reflection: "Chúa kêu gọi sám hối và tin tưởng. Chúng ta cầu xin sự đổi mới trong tâm hồn.",
        fruit: "Hoa trái của Mầu Nhiệm: Ăn Năn và Tin Tưởng"
      },
      {
        title: "Biến Hình trên núi",
        scripture: "“Mặt Ngài chói lọi như mặt trời.” — Matthew 17:2",
        reflection: "Chúa tỏ vẻ huy hoàng. Chúng ta cầu xin dũng khí làm chứng đức tin.",
        fruit: "Hoa trái của Mầu Nhiệm: Khao Khát Thánh Thiện"
      },
      {
        title: "Thánh Thể được thiết lập",
        scripture: "“Đây là thân thể Thầy, hiến cho các con.” — Luke 22:19-20",
        reflection: "Chúa ban chính mình trong Thánh Thể. Chúng ta cầu xin lòng yêu mến và tôn kính Thánh Thể.",
        fruit: "Hoa trái của Mầu Nhiệm: Lòng Sùng Kính"
      }
    ]
  },
  tl: {
    Joyful: [
      {
        title: "Ang Pagpapahayag kay Maria",
        scripture: "“Sa ikaanim na buwan, ang anghel na si Gabriel ay ipinadala ng Diyos sa isang bayan sa Galilea na tinatawag na Nazaret, sa isang dalagang ikinasal kay Jose, na mula sa angkan ni David; at ang dalaga ay tinatawag na Maria.” — Lucas 1:26-27",
        reflection: "Ang mapagpakumbabang pagtanggap ni Maria sa plano ng Diyos ay nagpapakita ng kanyang pananampalataya at pagsunod. Pinagdadasal natin na maging mapagpakumbaba at handang maglingkod sa Diyos tulad niya.",
        fruit: "Bunga ng Misteryo: Kababaang-loob"
      },
      {
        title: "Ang Pagdalaw kay Elizabeth",
        scripture: "“Sa mga araw na iyon, agad na bumangon si Maria at naglakbay papunta sa bundok ng Juda, sa isang bayan, at bumati kay Elizabeth.” — Lucas 1:39-40",
        reflection: "Dinalaw ni Maria ang kanyang pinsan na si Elizabeth upang magbigay ng suporta at kagalakan. Pinapaalalahanan tayo ng misteryong ito na mahalin ang ating kapwa nang walang pag-iimbot.",
        fruit: "Bunga ng Misteryo: Pag-ibig sa Kapwa"
      },
      {
        title: "Ang Kapanganakan ni Jesus",
        scripture: "“Pinanganak niya ang kanyang panganay na anak, binalot ng lampin, at inilagay sa isang sabsaban, sapagkat wala silang lugar sa bahay-pahingahan.” — Lucas 2:7",
        reflection: "Ang kapanganakan ni Jesus sa kahirapan ay nagpapakita ng dakilang pagmamahal at kababaang-loob ng Diyos na nagkatawang-tao. Tinatawagan tayo na tanggapin si Kristo nang may pananampalataya at kasimplehan.",
        fruit: "Bunga ng Misteryo: Kahirapan ng Espiritu"
      },
      {
        title: "Ang Pagsangguni sa Templo",
        scripture: "“Nang dumating ang panahon ng kanilang paglilinis ayon sa kautusan ni Moises, dinala nila si Jesus sa Jerusalem upang ialay sa Panginoon.” — Lucas 2:22",
        reflection: "Inialay nina Maria at Jose si Jesus sa templo, na nagpapakita ng kanilang pagsunod sa batas at debosyon sa kalooban ng Diyos. Tinatawagan tayo na maging matapat at masunurin sa ating mga tungkulin.",
        fruit: "Bunga ng Misteryo: Pagsunod"
      },
      {
        title: "Ang Paghahanap kay Jesus sa Templo",
        scripture: "“Pagkaraan ng tatlong araw, natagpuan nila siya sa templo, nakaupo sa gitna ng mga guro, nakikinig at nagtatanong sa kanila.” — Lucas 2:46",
        reflection: "Kahit bata pa si Jesus, ipinapakita niya ang pagnanais na makilala ang Diyos at tuparin ang kanyang misyon. Pinapaalalahanan tayo na hanapin si Jesus nang may kagalakan at pagtitiyaga sa ating buhay pananampalataya.",
        fruit: "Bunga ng Misteryo: Kagalakan sa Paghahanap kay Jesus"
      }
    ],
Sorrowful: [
      {
        title: "Ang Pagdurusa sa Hardin ng Getsemani",
        scripture: "“Siya ay nalungkot at nag-alala.” — Mateo 26:37-38",
        reflection: "Tinanggap ni Jesus ang kalooban ng Diyos sa kanyang paghihirap. Nagdarasal tayo para sa lakas sa ating mga pagsubok.",
        fruit: "Bunga ng Misteryo: Pagsisisi"
      },
      {
        title: "Ang Pagpalo kay Jesus",
        scripture: "“Pinapalo ni Pilato si Jesus.” — Juan 19:1",
        reflection: "Tinanggap ni Jesus ang sakit para sa ating mga kasalanan. Nagdarasal tayo para sa kadalisayan at pagpipigil sa sarili.",
        fruit: "Bunga ng Misteryo: Kadalisayan"
      },
      {
        title: "Ang Pagtatali ng Korona ng Tinik kay Jesus",
        scripture: "“Ipinuwesto nila ang korona ng mga tinik sa kanyang ulo.” — Mateo 27:29",
        reflection: "Tinanggap ni Jesus ang kahihiyan. Nagdarasal tayo para sa kababaang-loob at pagtitiis.",
        fruit: "Bunga ng Misteryo: Tapang ng Moralidad"
      },
      {
        title: "Ang Pagdadala ng Krus ni Jesus",
        scripture: "“Dinala niya ang kanyang krus patungo sa lugar ng pagpapako.” — Juan 19:17",
        reflection: "Dinala ni Jesus ang ating mga pasanin. Nagdarasal tayo para sa tibay sa pagdadala ng ating mga krus.",
        fruit: "Bunga ng Misteryo: Pagpupursige"
      },
      {
        title: "Ang Pagpapako kay Jesus sa Krus",
        scripture: "“Namatay si Jesus sa krus para sa atin.” — Juan 19:30",
        reflection: "Ibinigay ni Jesus ang kanyang buhay para sa kaligtasan. Nagdarasal tayo para sa kaligtasan at pag-ibig.",
        fruit: "Bunga ng Misteryo: Kaligtasan"
      }
    ],
    Glorious: [
      {
        title: "Ang Muling Pagkabuhay",
        scripture: "“Hindi Siya narito; Siya ay nabuhay na.” — Lucas 24:6",
        reflection: "Nawala ang kamatayan ni Jesus at binuksan ang langit. Nagdarasal tayo para sa pananampalataya at pag-asa.",
        fruit: "Bunga ng Misteryo: Pananampalataya"
      },
      {
        title: "Ang Pag-akyat sa Langit",
        scripture: "“Inakyat si Jesus sa langit.” — Lucas 24:51",
        reflection: "Bumalik si Jesus sa Ama at naghanda ng Espiritu Santo. Nagdarasal tayo para sa pagnanais sa langit.",
        fruit: "Bunga ng Misteryo: Pag-asa"
      },
      {
        title: "Ang Pagbaba ng Espiritu Santo",
        scripture: "“Puno sila ng Espiritu Santo.” — Mga Gawa 2:4",
        reflection: "Pinatibay ng Espiritu ang Simbahan. Nagdarasal tayo para sa mga kaloob ng Espiritu Santo.",
        fruit: "Bunga ng Misteryo: Pagmamahal"
      },
      {
        title: "Ang Pag-akyat ni Maria sa Langit",
        scripture: "Dinala si Maria ng katawan at kaluluwa sa kaluwalhatian ng langit. — Tradisyon",
        reflection: "Pinarangalan si Maria bilang Reyna ng Langit. Nagdarasal tayo para sa biyaya na sundin ang halimbawa Niya.",
        fruit: "Bunga ng Misteryo: Biyaya ng Mapayapang Kamatayan"
      },
      {
        title: "Ang Koronasyon ni Maria",
        scripture: "Si Maria ay koronahan bilang Reyna ng Langit at Lupa. — Tradisyon",
        reflection: "Si Maria ay koronahan bilang Reyna ng Langit at Lupa. Nagdarasal tayo para sa debosyon kay Maria.",
        fruit: "Bunga ng Misteryo: Tiwala sa Pananalangin ni Maria"
      }
    ],
    Luminous: [
      {
        title: "Ang Bautismo ni Jesus sa Jordan",
        scripture: "“Nang mabautismuhan si Jesus, siya ay umakyat mula sa tubig.” — Mateo 3:16-17",
        reflection: "Sinimulan ni Jesus ang kanyang ministeryo. Nagdarasal tayo para sa biyaya ng bautismo.",
        fruit: "Bunga ng Misteryo: Bukas sa Espiritu Santo"
      },
      {
        title: "Ang Kasalan sa Cana",
        scripture: "“Ginawa ni Jesus ang kanyang unang himala, pinalitan ang tubig ng alak.” — Juan 2:1-11",
        reflection: "Ipinakita ni Jesus ang kanyang kaluwalhatian at awa. Nagdarasal tayo para sa pananampalataya sa kapangyarihan Niya.",
        fruit: "Bunga ng Misteryo: Sa Jesus sa pamamagitan ni Maria"
      },
      {
        title: "Ipinahayag ni Jesus ang Kaharian ng Diyos",
        scripture: "“Magsisi kayo, sapagkat malapit na ang kaharian ng langit.” — Mateo 4:17",
        reflection: "Tinatawag tayo ni Jesus sa pagsisisi at pananampalataya. Nagdarasal tayo para sa pagbabago ng puso.",
        fruit: "Bunga ng Misteryo: Pagsisisi at Tiwala sa Diyos"
      },
      {
        title: "Ang Pagbabagong-anyo",
        scripture: "“Ang kanyang mukha ay nagniningning na parang araw.” — Mateo 17:2",
        reflection: "Ipinakita ni Jesus ang kanyang banal na kaluwalhatian. Nagdarasal tayo para sa tapang na ipahayag ang ating pananampalataya.",
        fruit: "Bunga ng Misteryo: Hangarin sa kabanalan"
      },
      {
        title: "Ang Institusyon ng Eukaristiya",
        scripture: "“Ito ang aking katawan na ibinibigay para sa inyo.” — Lucas 22:19-20",
        reflection: "Ibinigay ni Jesus ang kanyang sarili sa Eukaristiya. Nagdarasal tayo para sa pag-ibig at paggalang sa Eukaristiya.",
        fruit: "Bunga ng Misteryo: Pagsamba"
      }
    ]
  }
};

let currentFontSize = 28; //changed default from 16 to 28

const prayersDiv = document.getElementById("prayers");
const languageSelect = document.getElementById("languageSelect");
const daySelect = document.getElementById("daySelect");
const modeSelect = document.getElementById("modeSelect");

let currentDecade = 0;
let threeBeadsState = [false, false, false]; // track 3 Hail Mary beads
let singleOpeningBeadsState = [false, false, false, false]; // track single beads for 4 opening prayers

// single beads states for the green boxes (hailHolyQueen, closingDialogue, closingPrayer, closingSignOfCross)
let singleGreenBeadsState = {
  hailHolyQueen: false,
  closingDialogue: false,
  closingPrayer: false,
  closingSignOfCross: false
};

// Yellow box bead states (mystery, Our Father, Glory Be, Fatima)
let mysteryBeadsState = [false]; // SINGLE bead for mystery (was 5)
let ourFatherBeadsState = [false]; // 1 bead for Our Father
let gloryBeBeadsState = [false]; // 1 bead for Glory Be
let fatimaBeadsState = [false]; // 1 bead for Fatima Prayer

// Show mode select only if language is English
function updateModeSelectVisibility() {
  if (languageSelect.value === "en") {
    modeSelect.style.display = "inline-block";
  } else {
    modeSelect.style.display = "none";
    modeSelect.value = "standard"; // reset to standard for other languages
  }
}

languageSelect.addEventListener("change", () => {
  currentDecade = 0;
  resetBeadsOnLangOrDayChange();
  updateModeSelectVisibility();
  renderPrayers();
});

daySelect.addEventListener("change", () => {
  currentDecade = 0;
  resetBeadsOnLangOrDayChange();
  renderPrayers();
});

modeSelect.addEventListener("change", () => {
  currentDecade = 0;
  resetBeadsOnLangOrDayChange();
  renderPrayers();
});

function resetBeadsOnLangOrDayChange() {
  // Reset ALL beads on language, day, or mode change
  threeBeadsState = [false, false, false];
  singleOpeningBeadsState = [false, false, false, false];
  singleGreenBeadsState = {
    hailHolyQueen: false,
    closingDialogue: false,
    closingPrayer: false,
    closingSignOfCross: false
  };
  mysteryBeadsState = [false];
  ourFatherBeadsState = [false];
  gloryBeBeadsState = [false];
  fatimaBeadsState = [false];
}

function resetYellowBeads() {
  // Reset only yellow box beads on decade change
  mysteryBeadsState = [false];
  ourFatherBeadsState = [false];
  gloryBeBeadsState = [false];
  fatimaBeadsState = [false];
}

function renderPrayers() {
  const lang = languageSelect.value;
  const day = daySelect.value;
  const mode = modeSelect.value || "standard";
  const mysteryKey = mysteriesByDay[day];
  const t = titles[lang];
  const mysteryCategoryName = mysteryCategories[lang][mysteryKey];

  const ordinalMap = {
    en: ["First", "Second", "Third", "Fourth", "Fifth"],
    vi: ["Thứ Nhất", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm"],
    tl: ["Unang", "Ikalawang", "Ikatlong", "Ikaapat", "Ikalimang"]
  };

  let html = "";

  if (lang === "en" && mode === "oneDecade") {
    // ONE DECADE MODE

    // Opening prayers
    const openingPrayers = [
      { title: t.signOfTheCross, content: prayers[lang].signOfTheCross },
      { title: t.apostlesCreed, content: prayers[lang].apostlesCreed },
      { title: t.yourIntention, content: prayers[lang].yourIntention }, // NEW prayer
//      { title: t.ourFather, content: prayers[lang].ourFather },
//      { title: t.threeHailMarys, content: prayers[lang].hailMary },
//      { title: t.gloryBe, content: prayers[lang].gloryBe },
//      { title: t.fatimaPrayer, content: prayers[lang].fatima }
    ];

    for (let i = 0; i < openingPrayers.length; i++) {
      const prayer = openingPrayers[i];
      if (prayer.title === t.threeHailMarys) {
        html += `<div class='prayer opening'><strong>${prayer.title}:</strong><br>${prayer.content}
          <div class="bead-container right-justify" id="threeBeads">
            ${Array.from({ length: 3 }).map((_, i) => {
              const activeClass = threeBeadsState[i] ? "active" : "";
              return `<div class="bead ${activeClass}" data-type="3" data-index="${i}"></div>`;
            }).join("")}
          </div>
        </div>`;
      } else {
        const active = singleOpeningBeadsState[i] ? "active" : "";
        html += `<div class='prayer opening'>
          <strong>${prayer.title}:</strong><br>${prayer.content}
          <div class="bead-container right-justify">
            <div class="bead ${active}" data-type="1" data-index="${i}"></div>
          </div>
        </div>`;
      }
    }

    // Mysteries section for One Decade mode
//    const meditation = mysteryMeditations[lang][mysteryKey][currentDecade];
//    const ordinal = ordinalMap[lang][currentDecade];
//    let mysteryTitle;

//    mysteryTitle = `The ${ordinal} ${mysteryCategoryName} Mystery: ${meditation.title}`;
//
//    html += `<div class='prayer mysteries'>
//      <strong>${mysteryTitle}</strong><br><br>
//      <em>${meditation.scripture}</em><br><br>
//      ${meditation.reflection}<br><br>
//      <strong>${meditation.fruit}</strong>
//      <div id="mysteryBeads" class="bead-container right-justify" style="margin-top:10px;">
//        <div class="bead ${mysteryBeadsState[0] ? "active" : ""}" data-type="mystery" data-index="0"></div>
//      </div>
//    </div>`;

    // Our Father
    html += `<div class='prayer mysteries'><strong>${t.ourFather}:</strong><br>${prayers[lang].ourFather}
      <div id="ourFatherBeads" class="bead-container right-justify" style="margin-top:10px;">
        <div class="bead ${ourFatherBeadsState[0] ? "active" : ""}" data-type="ourFather" data-index="0"></div>
      </div>
    </div>`;

    // 10 Hail Marys
    html += `<div class='prayer mysteries'><strong>${t.tenHailMarys}:</strong><br>${prayers[lang].hailMary}
      <div id="tenBeads" class="bead-container right-justify" style="margin-top:10px;">
        ${Array.from({ length: 10 }).map((_, i) => `<div class="bead" data-type="10" data-index="${i}"></div>`).join("")}
      </div>
    </div>`;

    // Glory Be
    html += `<div class='prayer mysteries'><strong>${t.gloryBe}:</strong><br>${prayers[lang].gloryBe}
      <div id="gloryBeBeads" class="bead-container right-justify" style="margin-top:10px;">
        <div class="bead ${gloryBeBeadsState[0] ? "active" : ""}" data-type="gloryBe" data-index="0"></div>
      </div>
    </div>`;

    // Fatima Prayer
    html += `<div class='prayer mysteries'><strong>${t.fatimaPrayer}:</strong><br>${prayers[lang].fatima}
      <div id="fatimaBeads" class="bead-container right-justify" style="margin-top:10px;">
        <div class="bead ${fatimaBeadsState[0] ? "active" : ""}" data-type="fatima" data-index="0"></div>
      </div>
    </div>`;

//Comment out the mystery navigation buttons
    // Navigation buttons
//    html += `
//      <div class="navigation" style="margin-top: 1rem; text-align:center;">
//        <button onclick="prevDecade()" ${currentDecade === 0 ? "disabled" : ""}>Prev. Decade</button>
//        <button onclick="nextDecade()" ${currentDecade === 4 ? "disabled" : ""}>Next Decade</button>
//      </div>`;



//I've commented this out incase I want to bring back closing prayer section.
    // Closing prayers (only Sign of the Cross at the end)
    const closingPrayers = [
      { name: "closingSignOfCross", title: t.signOfTheCross, content: prayers[lang].signOfTheCross }
    ];

    closingPrayers.forEach(prayer => {
      const activeClass = singleGreenBeadsState[prayer.name] ? "active" : "";
      html += `<div class='prayer closing'>
        <strong>${prayer.title}:</strong><br>${prayer.content}
        <div class="bead-container right-justify">
          <div class="bead ${activeClass}" data-type="singleGreen" data-name="${prayer.name}"></div>
        </div>
      </div>`;
    });

  } else if (lang === "en" && mode === "forDeceased") {
    // PRAYER ORDER FOR DECEASED MODE (your existing code)
    // Opening prayers with single beads
    const openingPrayers = [
      { title: t.signOfTheCross, content: prayers[lang].signOfTheCross },
      { title: t.apostlesCreed, content: prayers[lang].apostlesCreed },
      { title: t.forDeceasedIntention, content: prayers[lang].forDeceasedIntention },
      { title: t.prayerForTheFaithfulDeparted, content: prayers[lang].prayerForTheFaithfulDeparted },
      { title: t.ourFather, content: prayers[lang].ourFather },
      { title: t.threeHailMarys, content: prayers[lang].hailMary },
      { title: t.gloryBe, content: prayers[lang].gloryBe }
    ];

    // Render opening prayers with single beads
    for (let i = 0; i < openingPrayers.length; i++) {
      const prayer = openingPrayers[i];
      // For simplicity, single beads for all except the 3 Hail Marys (which has 3 beads)
      if (prayer.title === t.threeHailMarys) {
        html += `<div class='prayer opening'><strong>${prayer.title}:</strong><br>${prayer.content}
          <div class="bead-container right-justify" id="threeBeads">
            ${Array.from({ length: 3 }).map((_, i) => {
              const activeClass = threeBeadsState[i] ? "active" : "";
              return `<div class="bead ${activeClass}" data-type="3" data-index="${i}"></div>`;
            }).join("")}
          </div>
        </div>`;
      } else {
        const active = singleOpeningBeadsState[i] ? "active" : "";
        html += `
          <div class='prayer opening'>
            <strong>${prayer.title}:</strong><br>${prayer.content}
            <div class="bead-container right-justify">
              <div class="bead ${active}" data-type="1" data-index="${i}"></div>
            </div>
          </div>`;
      }
    }

    // Mysteries section with added prayerForTheFaithfulDeparted (after Fatima)
    const meditation = mysteryMeditations[lang][mysteryKey][currentDecade];
    const ordinal = ordinalMap[lang][currentDecade];
    let mysteryTitle;

    mysteryTitle = `The ${ordinal} ${mysteryCategoryName} Mystery: ${meditation.title}`;

    html += `<div class='prayer mysteries'>
      <strong>${mysteryTitle}</strong><br><br>
      <em>${meditation.scripture}</em><br><br>
      ${meditation.reflection}<br><br>
      <strong>${meditation.fruit}</strong>
      <div id="mysteryBeads" class="bead-container right-justify" style="margin-top:10px;">
        <div class="bead ${mysteryBeadsState[0] ? "active" : ""}" data-type="mystery" data-index="0"></div>
      </div>
    </div>`;

    // Our Father
    html += `<div class='prayer mysteries'><strong>${t.ourFather}:</strong><br>${prayers[lang].ourFather}
      <div id="ourFatherBeads" class="bead-container right-justify" style="margin-top:10px;">
        <div class="bead ${ourFatherBeadsState[0] ? "active" : ""}" data-type="ourFather" data-index="0"></div>
      </div>
    </div>`;

    // 10 Hail Marys
    html += `<div class='prayer mysteries'><strong>${t.tenHailMarys}:</strong><br>${prayers[lang].hailMary}
      <div id="tenBeads" class="bead-container right-justify" style="margin-top:10px;">
        ${Array.from({ length: 10 }).map((_, i) => `<div class="bead" data-type="10" data-index="${i}"></div>`).join("")}
      </div>
    </div>`;

    // Glory Be
    html += `<div class='prayer mysteries'><strong>${t.gloryBe}:</strong><br>${prayers[lang].gloryBe}
      <div id="gloryBeBeads" class="bead-container right-justify" style="margin-top:10px;">
        <div class="bead ${gloryBeBeadsState[0] ? "active" : ""}" data-type="gloryBe" data-index="0"></div>
      </div>
    </div>`;

    // Fatima Prayer
    html += `<div class='prayer mysteries'><strong>${t.fatimaPrayer}:</strong><br>${prayers[lang].fatima}
      <div id="fatimaBeads" class="bead-container right-justify" style="margin-top:10px;">
        <div class="bead ${fatimaBeadsState[0] ? "active" : ""}" data-type="fatima" data-index="0"></div>
      </div>
    </div>`;

    // Prayer for the Faithful Departed (new, single bead)
    html += `<div class='prayer mysteries'><strong>${t.prayerForTheFaithfulDeparted}:</strong><br>${prayers[lang].prayerForTheFaithfulDeparted}
      <div class="bead-container right-justify" style="margin-top:10px;">
        <div class="bead" data-type="singleNew" data-name="prayerForTheFaithfulDeparted"></div>
      </div>
    </div>`;

    // Navigation buttons
    html += `
      <div class="navigation" style="margin-top: 1rem; text-align:center;">
        <button onclick="prevDecade()" ${currentDecade === 0 ? "disabled" : ""}>Prev. Decade</button>
        <button onclick="nextDecade()" ${currentDecade === 4 ? "disabled" : ""}>Next Decade</button>
      </div>`;

    // Closing prayers with single beads including new ones and sign of the cross at end
    const closingPrayers = [
      { name: "hailHolyQueen", title: t.hailHolyQueen, content: prayers[lang].hailHolyQueen },
      { name: "closingDialogue", title: t.closingDialogue, content: prayers[lang].closingDialogue },
      { name: "closingPrayer", title: t.closingPrayer, content: prayers[lang].closingPrayer },
      { name: "litanyOfTheBlessedVirginMary", title: t.litanyOfTheBlessedVirginMary, content: prayers[lang].litanyOfTheBlessedVirginMary },
      { name: "concludingPrayerForTheDeceased", title: t.concludingPrayerForTheDeceased, content: prayers[lang].concludingPrayerForTheDeceased },
      { name: "closingSignOfCross", title: t.signOfTheCross, content: prayers[lang].signOfTheCross }
    ];

    closingPrayers.forEach(prayer => {
      const activeClass = singleGreenBeadsState[prayer.name] ? "active" : "";
      html += `<div class='prayer closing'>
        <strong>${prayer.title}:</strong><br>${prayer.content}
        <div class="bead-container right-justify">
          <div class="bead ${activeClass}" data-type="singleGreen" data-name="${prayer.name}"></div>
        </div>
      </div>`;
    });

  } else {
    // STANDARD MODE (unchanged, your original renderPrayers for standard mode)
    const openingPrayers = [
      { title: t.signOfTheCross, content: prayers[lang].signOfTheCross },
      { title: t.apostlesCreed, content: prayers[lang].apostlesCreed },
      { title: t.ourFather, content: prayers[lang].ourFather },
      { title: t.gloryBe, content: prayers[lang].gloryBe } // Moved gloryBe to end, but render after 3 Hail Marys
    ];

    // Render first three opening prayers (Sign of the Cross, Apostles Creed, Our Father)
    for (let i = 0; i < 3; i++) {
      const prayer = openingPrayers[i];
      const active = singleOpeningBeadsState[i] ? "active" : "";
      html += `
        <div class='prayer opening'>
          <strong>${prayer.title}:</strong><br>${prayer.content}
          <div class="bead-container right-justify">
            <div class="bead ${active}" data-type="1" data-index="${i}"></div>
          </div>
        </div>`;
    }

    // Three Hail Marys (3 beads) - must come after Our Father, before Glory Be
    html += `<div class='prayer opening'><strong>${t.threeHailMarys}:</strong><br>${prayers[lang].hailMary}
      <div class="bead-container right-justify" id="threeBeads">
        ${Array.from({ length: 3 }).map((_, i) => {
          const activeClass = threeBeadsState[i] ? "active" : "";
          return `<div class="bead ${activeClass}" data-type="3" data-index="${i}"></div>`;
        }).join("")}
      </div>
    </div>`;

    // Now render Glory Be as the 4th opening prayer
    const gloryIndex = 3;
    const gloryPrayer = openingPrayers[gloryIndex];
    const gloryActive = singleOpeningBeadsState[gloryIndex] ? "active" : "";
    html += `
      <div class='prayer opening'>
        <strong>${gloryPrayer.title}:</strong><br>${gloryPrayer.content}
        <div class="bead-container right-justify">
          <div class="bead ${gloryActive}" data-type="1" data-index="${gloryIndex}"></div>
        </div>
      </div>`;

    // Mystery Section with SINGLE bead (updated from 5 beads)
    const meditation = mysteryMeditations[lang][mysteryKey][currentDecade];
    const ordinal = ordinalMap[lang][currentDecade];
    let mysteryTitle;

    if (lang === "en") {
      mysteryTitle = `The ${ordinal} ${mysteryCategoryName} Mystery: ${meditation.title}`;
    } else if (lang === "vi") {
      mysteryTitle = `${mysteryCategoryName} ${ordinal}: ${meditation.title}`;
    } else if (lang === "tl") {
      mysteryTitle = `${ordinal} ${mysteryCategoryName}: ${meditation.title}`;
    }

    html += `<div class='prayer mysteries'>
      <strong>${mysteryTitle}</strong><br><br>
      <em>${meditation.scripture}</em><br><br>
      ${meditation.reflection}<br><br>
      <strong>${meditation.fruit}</strong>
      <div id="mysteryBeads" class="bead-container right-justify" style="margin-top:10px;">
        <div class="bead ${mysteryBeadsState[0] ? "active" : ""}" data-type="mystery" data-index="0"></div>
      </div>
    </div>`;

    // Our Father with 1 bead (mysteries section)
    html += `<div class='prayer mysteries'><strong>${t.ourFather}:</strong><br>${prayers[lang].ourFather}
      <div id="ourFatherBeads" class="bead-container right-justify" style="margin-top:10px;">
        <div class="bead ${ourFatherBeadsState[0] ? "active" : ""}" data-type="ourFather" data-index="0"></div>
      </div>
    </div>`;

    // 10 Hail Marys with 10 beads (unchanged)
    html += `<div class='prayer mysteries'><strong>${t.tenHailMarys}:</strong><br>${prayers[lang].hailMary}
      <div id="tenBeads" class="bead-container right-justify" style="margin-top:10px;">
        ${Array.from({ length: 10 }).map((_, i) => `<div class="bead" data-type="10" data-index="${i}"></div>`).join("")}
      </div>
    </div>`;

    // Glory Be with 1 bead (mysteries section)
    html += `<div class='prayer mysteries'><strong>${t.gloryBe}:</strong><br>${prayers[lang].gloryBe}
      <div id="gloryBeBeads" class="bead-container right-justify" style="margin-top:10px;">
        <div class="bead ${gloryBeBeadsState[0] ? "active" : ""}" data-type="gloryBe" data-index="0"></div>
      </div>
    </div>`;

    // Fatima Prayer with 1 bead
    html += `<div class='prayer mysteries'><strong>${t.fatimaPrayer}:</strong><br>${prayers[lang].fatima}
      <div id="fatimaBeads" class="bead-container right-justify" style="margin-top:10px;">
        <div class="bead ${fatimaBeadsState[0] ? "active" : ""}" data-type="fatima" data-index="0"></div>
      </div>
    </div>`;

    // NAVIGATION BUTTONS moved BELOW the yellow mysteries section
    html += `
      <div class="navigation" style="margin-top: 1rem; text-align:center;">
        <button onclick="prevDecade()" ${currentDecade === 0 ? "disabled" : ""}>Prev. Decade</button>
        <button onclick="nextDecade()" ${currentDecade === 4 ? "disabled" : ""}>Next Decade</button>
      </div>`;

    // Hail Holy Queen with single bead
    const activeHailHolyQueen = singleGreenBeadsState.hailHolyQueen ? "active" : "";
    html += `<div class='prayer closing'>
      <strong>${t.hailHolyQueen}:</strong><br>${prayers[lang].hailHolyQueen}
      <div class="bead-container right-justify">
        <div class="bead ${activeHailHolyQueen}" data-type="singleGreen" data-name="hailHolyQueen"></div>
      </div>
    </div>`;

    // Closing dialogue with single bead
    const activeClosingDialogue = singleGreenBeadsState.closingDialogue ? "active" : "";
    html += `<div class='prayer closing'>
      <strong>${t.closingDialogue}:</strong><br>${prayers[lang].closingDialogue}
      <div class="bead-container right-justify">
        <div class="bead ${activeClosingDialogue}" data-type="singleGreen" data-name="closingDialogue"></div>
      </div>
    </div>`;

    // Closing prayer with single bead
    const activeClosingPrayer = singleGreenBeadsState.closingPrayer ? "active" : "";
    html += `<div class='prayer closing'>
      <strong>${t.closingPrayer}:</strong><br>${prayers[lang].closingPrayer}
      <div class="bead-container right-justify">
        <div class="bead ${activeClosingPrayer}" data-type="singleGreen" data-name="closingPrayer"></div>
      </div>
    </div>`;

    // Sign of the Cross (closing) with single bead
    const activeClosingSignOfCross = singleGreenBeadsState.closingSignOfCross ? "active" : "";
    html += `<div class='prayer closing'>
      <strong>${t.signOfTheCross}:</strong><br>${prayers[lang].signOfTheCross}
      <div class="bead-container right-justify">
        <div class="bead ${activeClosingSignOfCross}" data-type="singleGreen" data-name="closingSignOfCross"></div>
      </div>
    </div>`;
  }

  prayersDiv.style.fontSize = currentFontSize + "px";
  prayersDiv.innerHTML = html;

  attachBeadListeners();
}

// Scroll so the first yellow box (.prayer.mysteries) is at top of viewport, smoothly
function scrollToFirstYellowBox() {
  const firstYellowBox = document.querySelector(".prayer.mysteries");
  if (firstYellowBox) {
    firstYellowBox.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function attachBeadListeners() {
  // 3 beads (3 Hail Marys)
  document.querySelectorAll("#threeBeads .bead").forEach(bead => {
    const index = parseInt(bead.getAttribute("data-index"), 10);
    bead.addEventListener("click", () => {
      bead.classList.toggle("active");
      threeBeadsState[index] = bead.classList.contains("active");
    });
  });

  // 10 beads (10 Hail Marys)
  document.querySelectorAll("#tenBeads .bead").forEach(bead => {
    bead.addEventListener("click", () => {
      bead.classList.toggle("active");
    });
  });

  // mystery bead (single bead now)
  document.querySelectorAll("#mysteryBeads .bead").forEach(bead => {
    bead.addEventListener("click", () => {
      bead.classList.toggle("active");
      mysteryBeadsState[0] = bead.classList.contains("active");
    });
  });

  // ourFather bead (single)
  document.querySelectorAll("#ourFatherBeads .bead").forEach(bead => {
    bead.addEventListener("click", () => {
      bead.classList.toggle("active");
      ourFatherBeadsState[0] = bead.classList.contains("active");
    });
  });

  // gloryBe bead (single)
  document.querySelectorAll("#gloryBeBeads .bead").forEach(bead => {
    bead.addEventListener("click", () => {
      bead.classList.toggle("active");
      gloryBeBeadsState[0] = bead.classList.contains("active");
    });
  });

  // fatima bead (single)
  document.querySelectorAll("#fatimaBeads .bead").forEach(bead => {
    bead.addEventListener("click", () => {
      bead.classList.toggle("active");
      fatimaBeadsState[0] = bead.classList.contains("active");
    });
  });

  // single beads (sign of cross, apostles creed, our father, glory be, intention, prayerForTheFaithfulDeparted in new mode)
  document.querySelectorAll(".bead[data-type='1']").forEach(bead => {
    const index = parseInt(bead.getAttribute("data-index"), 10);
    bead.addEventListener("click", () => {
      bead.classList.toggle("active");
      singleOpeningBeadsState[index] = bead.classList.contains("active");
    });
  });

  // single green beads (hailHolyQueen, closingDialogue, closingPrayer, closingSignOfCross, litanyOfTheBlessedVirginMary, concludingPrayerForTheDeceased)
  document.querySelectorAll(".bead[data-type='singleGreen']").forEach(bead => {
    const name = bead.getAttribute("data-name");
    bead.addEventListener("click", () => {
      bead.classList.toggle("active");
      singleGreenBeadsState[name] = bead.classList.contains("active");
    });
  });

  // single bead for prayerForTheFaithfulDeparted in mysteries section in deceased mode
  document.querySelectorAll(".bead[data-type='singleNew']").forEach(bead => {
    bead.addEventListener("click", () => {
      bead.classList.toggle("active");
      // You can track this state if needed
    });
  });
}

function prevDecade() {
  if (currentDecade > 0) {
    currentDecade--;
    resetYellowBeads();  // Reset ONLY yellow beads on decade change
    renderPrayers();
    scrollToFirstYellowBox();
  }
}

function nextDecade() {
  if (currentDecade < 4) {
    currentDecade++;
    resetYellowBeads();  // Reset ONLY yellow beads on decade change
    renderPrayers();
    scrollToFirstYellowBox();
  }
}

function setCurrentDay() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  daySelect.value = days[today.getDay()];
}

setCurrentDay();
updateModeSelectVisibility();
renderPrayers();

document.getElementById("increaseFontBtn").addEventListener("click", () => {
  if (currentFontSize < 50) { //changed max from 30 to 50
    currentFontSize += 2;
    renderPrayers();
  }
});

document.getElementById("decreaseFontBtn").addEventListener("click", () => {
  if (currentFontSize > 10) {
    currentFontSize -= 2;
    renderPrayers();
  }
});

// NEW: Toggle all beads visibility with a button
const toggleBeadsBtn = document.getElementById("toggleBeadsBtn");
toggleBeadsBtn.addEventListener("click", () => {
  const beadsVisible = prayersDiv.classList.toggle("hide-beads");
  toggleBeadsBtn.textContent = beadsVisible ? "Show Beads" : "Hide Beads";
});
