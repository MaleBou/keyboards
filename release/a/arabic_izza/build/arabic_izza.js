
KeymanWeb.KR(new Keyboard_arabic_izza());

function Keyboard_arabic_izza()
{
  
  this.KI="Keyboard_arabic_izza";
  this.KN="Arabic Izza";
  this.KMINVER="9.0";
  this.KV={F:' 1em "Tahoma"',K102:0};
  this.KDU=0;
  this.KV.KLS={
    "default": ["ِ","1","2","3","4","5","6","7","8","9","0","َ","ّ","","","","ض","ص","ث","ق","ف","غ","ع","ه","خ","ح","ج","د","ذ","","","","ش","س","ي","ب","ا","ل","ت","ن","م","ك","ط","","","","","","","،","ُ","ر","ء","ال","ى","ة","و","ز","ظ","","","","","",""],
    "shift": ["ٍ","©","@","#","~","%","*","&","_","(",")","ً","ّ","","","","ُ","ٌ","ٍ","ً","ڤ","=","\\","÷","×","-","چ","+",">","","","","ّ","ْ","|","پ","{","}","ـ","[","]","گ","<","","","","","","","،","ٌ","\"","!","؛",":","،",".","ژ","؟","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KH='<!DOCTYPE HTML> <html>   <head>     <meta charset=\'utf-8\'>     <title>Arabic Izza: The pleasure of typing Arabic</title>   </head> <body>  <h1>Arabic Izza: The pleasure of typing and using Arabic Script</h1> <h1>استرجاع لهيبة العربية في عصر المعلوماتية</h1>  <p>Supported languages: Arabic, Tamazight, Farsi, Ottoman (Turkish), etc.</p> <p>يمكن استعمال مفاتيح العزة لكتابة: العربية، الأمازيغية، الفارسية، العثمانية، إلخ</p> <br/>  <p>In order to type letters with Hamza proceed as follows: </p> <p>قواعد كتابة الهمزة</p>  <br/>  <p>Isolated Hamza(ء), press letter Hamza(ء)once.</p> <p>الهمزة لوحدها، الضغط على رمز الهمزة مرة واحدة</p> <br/>  <p>Hamza fouk alif(أ), press letter alif(ا)twice.</p> <p>الهمزة فوق ألف، الضغط على رمز الألف مرتين</p> <br/>  <p>Hamza taht alif(إ), press letter Hamza(ء)twice.</p> <p>الهمزة تحت ألف، الضغط على رمز الهمزة مرتين</p> <br/>  <p>Hamza fouk waw(ؤ), press letter waw(و)twice.</p> <p>الهمزة فوق واو، الضغط على رمز الواو مرتين</p> <br/>  <p>Hamza fouk nabira(ئ), press nabira twice(ى).</p> <p>الهمزة فوق نبرة، الضغط على رمز النبرة مرتين</p> <br/>  <p>Hamzat madd(آ), press Isolated Hamza(ء)followed by Alif(ا).</p> <p>همزة المد، الضغط على الهمزة ثم الألف</p> <br/>  <p>To type Al taarif(ال), just press one key.</p> <p>الـ التعريف لها زر مستقل</p> <br/>  <p>Harakat(Damma, Fatha, Kasra)and Shadda are on the first level without Shift.</p> <p>الحركات و الشدة لها أزرار مستقلة على المستوى الأول</p> <br/>  <p>Extra letters (چ،ڤ،گ،پ،ژ)are found on second level under keys (ج،ف،ك،ب،ز) respectively, which make them very easy to locate.</p> <p>(چ،ڤ،گ،پ،ژ) الحروف <br/> توجد على المستوى الثاني تحت أزرار الحروف التالية <br/> (ج،ف،ك،ب،ز) <br/> مما يسهل تحديد مكانها</p> <br/>  <h2>Touch Layouts</h2> <h3>Tablet</h3> <p>The layout remains mostly unchanged except for punctuation marks and the extra letters. They could be reached from the first level without shift.</p> <p>التصميم كما في حواسيب المكتب ما عدا بعض التغييرات تتعلق برموز التنقيط و الحروف الزائدة توجد كلها على المستوى الأول </p> <br/>  <h3>Phone</h3> <p>Besides taking advantage of the main points above, the number of keys is reduced to eight  in each line on the first layer, thus improving enormously the comfort and typing speed.</p> <p>إلى جانب العمل بالنقاط المذكورة أعلاه، لقد تم تخفيض عدد المفاتيح في كل سطر إلى ثمانية على المستوى الأول، مما يضاعف من سرعة إدخال النصوص العربية</p>  <br/>  <p>© 1977-2018 Prof. Abdelmalek Bouhadjera</p>  </body> </html>  ';
  this.KM=0;
  this.KBVER="1.1";
  this.KMBM=0x0010;
  this.KRTL=1;
  this.KVKL={
  "tablet": {
    "font": "Tahoma",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "ِ"
              },
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              },
              {
                "id": "K_HYPHEN",
                "text": "َ"
              },
              {
                "id": "K_EQUAL",
                "text": "ّ"
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_Q",
                "text": "ض",
                "pad": 75
              },
              {
                "id": "K_W",
                "text": "ص"
              },
              {
                "id": "K_E",
                "text": "ث"
              },
              {
                "id": "K_R",
                "text": "ق"
              },
              {
                "id": "K_T",
                "text": "ف",
                "sk": [
                  {
                    "text": "ڤ",
                    "id": "K_T",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "غ"
              },
              {
                "id": "K_U",
                "text": "ع"
              },
              {
                "id": "K_I",
                "text": "ه"
              },
              {
                "id": "K_O",
                "text": "خ"
              },
              {
                "id": "K_P",
                "text": "ح"
              },
              {
                "id": "K_LBRKT",
                "text": "ج",
                "sk": [
                  {
                    "text": "چ",
                    "id": "K_LBRKT",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_RBRKT",
                "text": "د"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_A",
                "text": "ش"
              },
              {
                "id": "K_S",
                "text": "س"
              },
              {
                "id": "K_D",
                "text": "ي"
              },
              {
                "id": "K_F",
                "text": "ب",
                "sk": [
                  {
                    "text": "پ",
                    "id": "K_F",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "ا"
              },
              {
                "id": "K_H",
                "text": "ل"
              },
              {
                "id": "K_J",
                "text": "ت"
              },
              {
                "id": "K_K",
                "text": "ن"
              },
              {
                "id": "K_L",
                "text": "م"
              },
              {
                "id": "K_COLON",
                "text": "ك",
                "sk": [
                  {
                    "text": "گ",
                    "id": "K_COLON",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_QUOTE",
                "text": "ط"
              },
              {
                "id": "K_BKSLASH",
                "text": "ذ"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "160",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "K_Z",
                "text": "،"
              },
              {
                "id": "K_X",
                "text": "ُ"
              },
              {
                "id": "K_C",
                "text": "ر"
              },
              {
                "id": "K_V",
                "text": "ء"
              },
              {
                "id": "K_B",
                "text": "ال"
              },
              {
                "id": "K_N",
                "text": "ى"
              },
              {
                "id": "K_M",
                "text": "ة"
              },
              {
                "id": "K_COMMA",
                "text": "و"
              },
              {
                "id": "K_PERIOD",
                "text": "ز",
                "sk": [
                  {
                    "text": "ژ",
                    "id": "K_PERIOD",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_SLASH",
                "text": "ظ"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "145",
                "sp": "1"
              }
            ]
          },
          {
            "id": 5,
            "key": [
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": 119,
                "sp": "1"
              },
              {
                "id": "K_9",
                "text": "(",
                "layer": "shift"
              },
              {
                "id": "K_0",
                "text": ")",
                "layer": "shift"
              },
              {
                "id": "K_SLASH",
                "text": "؟",
                "layer": "shift"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "500",
                "sp": "0"
              },
              {
                "id": "K_V",
                "text": "!",
                "layer": "shift"
              },
              {
                "id": "K_N",
                "text": ":",
                "layer": "shift"
              },
              {
                "id": "K_B",
                "text": "؛",
                "layer": "shift"
              },
              {
                "id": "K_COMMA",
                "text": ".",
                "layer": "shift"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "ٍ",
                "layer": "shift"
              },
              {
                "id": "K_1",
                "text": "©",
                "layer": "shift"
              },
              {
                "id": "K_2",
                "text": "@",
                "layer": "shift"
              },
              {
                "id": "K_3",
                "text": "#",
                "layer": "shift"
              },
              {
                "id": "K_4",
                "text": "~",
                "layer": "shift"
              },
              {
                "id": "K_5",
                "text": "%",
                "layer": "shift"
              },
              {
                "id": "K_6",
                "text": "*",
                "layer": "shift"
              },
              {
                "id": "K_7",
                "text": "&",
                "layer": "shift"
              },
              {
                "id": "K_8",
                "text": "_",
                "layer": "shift"
              },
              {
                "id": "K_9",
                "text": "(",
                "layer": "shift"
              },
              {
                "id": "K_0",
                "text": ")",
                "layer": "shift"
              },
              {
                "id": "K_HYPHEN",
                "text": "ً",
                "layer": "shift"
              },
              {
                "id": "K_EQUAL",
                "text": "ّ",
                "layer": "shift"
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_Q",
                "text": "ُ",
                "pad": 75,
                "layer": "shift"
              },
              {
                "id": "K_W",
                "text": "ٌ",
                "layer": "shift"
              },
              {
                "id": "K_E",
                "text": "ٍ",
                "layer": "shift"
              },
              {
                "id": "K_R",
                "text": "ً",
                "layer": "shift"
              },
              {
                "id": "K_T",
                "text": "ڤ",
                "layer": "shift"
              },
              {
                "id": "K_Y",
                "text": "=",
                "layer": "shift"
              },
              {
                "id": "K_U",
                "text": "\\",
                "layer": "shift"
              },
              {
                "id": "K_I",
                "text": "÷",
                "layer": "shift"
              },
              {
                "id": "K_O",
                "text": "×",
                "layer": "shift"
              },
              {
                "id": "K_P",
                "text": "-",
                "layer": "shift"
              },
              {
                "id": "K_LBRKT",
                "text": "چ",
                "layer": "shift"
              },
              {
                "id": "K_RBRKT",
                "text": "+",
                "layer": "shift"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_A",
                "text": "ّ",
                "layer": "shift"
              },
              {
                "id": "K_S",
                "text": "ْ",
                "layer": "shift"
              },
              {
                "id": "K_D",
                "text": "|",
                "layer": "shift"
              },
              {
                "id": "K_F",
                "text": "پ",
                "layer": "shift"
              },
              {
                "id": "K_G",
                "text": "{",
                "layer": "shift"
              },
              {
                "id": "K_H",
                "text": "}",
                "layer": "shift"
              },
              {
                "id": "K_J",
                "text": "ـ",
                "layer": "shift"
              },
              {
                "id": "K_K",
                "text": "[",
                "layer": "shift"
              },
              {
                "id": "K_L",
                "text": "]",
                "layer": "shift"
              },
              {
                "id": "K_COLON",
                "text": "گ",
                "layer": "shift"
              },
              {
                "id": "K_QUOTE",
                "text": "<",
                "layer": "shift"
              },
              {
                "id": "K_BKSLASH",
                "text": ">",
                "layer": "shift"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "",
                "width": "160",
                "sp": "2",
                "nextlayer": "default"
              },
              {
                "id": "K_Z",
                "text": "،",
                "layer": "shift"
              },
              {
                "id": "K_X",
                "text": "ٌ",
                "layer": "shift"
              },
              {
                "id": "K_C",
                "text": "\"",
                "layer": "shift"
              },
              {
                "id": "K_V",
                "text": "!",
                "layer": "shift"
              },
              {
                "id": "K_B",
                "text": "؛",
                "layer": "shift"
              },
              {
                "id": "K_N",
                "text": ":",
                "layer": "shift"
              },
              {
                "id": "K_M",
                "text": "،",
                "layer": "shift"
              },
              {
                "id": "K_COMMA",
                "text": ".",
                "layer": "shift"
              },
              {
                "id": "K_PERIOD",
                "text": "ژ",
                "layer": "shift"
              },
              {
                "id": "K_SLASH",
                "text": "؟",
                "layer": "shift"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "145",
                "sp": "1"
              }
            ]
          },
          {
            "id": 5,
            "key": [
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "180",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "1140",
                "sp": "0"
              }
            ]
          }
        ]
      }
    ]
  },
  "phone": {
    "font": "Tahoma",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "K_W",
                "text": "ص",
                "width": "146",
                "sk": [
                  {
                    "text": "ض",
                    "id": "K_Q"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "ق",
                "width": "146",
                "sk": [
                  {
                    "text": "(",
                    "id": "K_9",
                    "layer": "shift"
                  },
                  {
                    "text": ")",
                    "id": "K_0",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_T",
                "text": "ف",
                "width": "146",
                "sk": [
                  {
                    "text": "ڤ",
                    "id": "K_T",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "ع",
                "width": "146",
                "sk": [
                  {
                    "text": "غ",
                    "id": "K_Y"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "ه",
                "width": "146",
                "sk": [
                  {
                    "text": "ة",
                    "id": "K_M"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "ح",
                "width": "146",
                "sk": [
                  {
                    "text": "خ",
                    "id": "K_O"
                  }
                ]
              },
              {
                "id": "K_LBRKT",
                "text": "ج",
                "width": "146",
                "sk": [
                  {
                    "text": "چ",
                    "id": "K_LBRKT",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_COLON",
                "text": "ك",
                "width": "146",
                "sk": [
                  {
                    "text": "گ",
                    "id": "K_COLON",
                    "layer": "shift"
                  }
                ]
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_S",
                "text": "س",
                "width": "146",
                "sk": [
                  {
                    "text": "ش",
                    "id": "K_A"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "ي",
                "width": "146",
                "sk": [
                  {
                    "text": "=",
                    "id": "K_Y",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "ب",
                "width": "146",
                "sk": [
                  {
                    "text": "پ",
                    "id": "K_F",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "ا",
                "width": "146"
              },
              {
                "id": "K_H",
                "text": "ل",
                "width": "146",
                "sk": [
                  {
                    "text": "ـ",
                    "id": "K_J",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_J",
                "text": "ت",
                "width": "146",
                "sk": [
                  {
                    "text": "ث",
                    "id": "K_E"
                  }
                ]
              },
              {
                "id": "K_K",
                "text": "ن",
                "width": "146",
                "sk": [
                  {
                    "text": ".",
                    "id": "K_COMMA",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_L",
                "text": "م",
                "width": "146",
                "sk": [
                  {
                    "text": "×",
                    "id": "K_O",
                    "layer": "shift"
                  }
                ]
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_Z",
                "text": "،",
                "width": "146",
                "sk": [
                  {
                    "text": "؛",
                    "id": "K_B",
                    "layer": "shift"
                  },
                  {
                    "text": ":",
                    "id": "K_N",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_C",
                "text": "ر",
                "width": "146",
                "sk": [
                  {
                    "text": "ز",
                    "id": "K_PERIOD"
                  },
                  {
                    "text": "ژ",
                    "id": "K_PERIOD",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "ء",
                "width": "146"
              },
              {
                "id": "K_B",
                "text": "ال",
                "width": "146"
              },
              {
                "id": "K_N",
                "text": "ى",
                "width": "146"
              },
              {
                "id": "K_COMMA",
                "text": "و",
                "width": "146"
              },
              {
                "id": "K_QUOTE",
                "text": "ط",
                "width": "146",
                "sk": [
                  {
                    "text": "ظ",
                    "id": "K_SLASH"
                  }
                ]
              },
              {
                "id": "K_RBRKT",
                "text": "د",
                "width": "146",
                "sk": [
                  {
                    "text": "ذ",
                    "id": "K_BKSLASH"
                  }
                ]
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "140",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_COMMA",
                "text": ".",
                "width": "146",
                "sk": [
                  {
                    "text": "؟",
                    "id": "K_SLASH",
                    "layer": "shift"
                  },
                  {
                    "text": "!",
                    "id": "K_V",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "340",
                "sp": "0"
              },
              {
                "id": "K_EQUAL",
                "text": "ّ",
                "width": "146",
                "sk": [
                  {
                    "text": "َ",
                    "id": "K_HYPHEN"
                  },
                  {
                    "text": "ِ",
                    "id": "K_BKQUOTE"
                  },
                  {
                    "text": "ُ",
                    "id": "K_X"
                  }
                ]
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "K_1",
                "text": "1",
                "width": "104",
                "sp": "1"
              },
              {
                "id": "K_2",
                "text": "2",
                "width": "104"
              },
              {
                "id": "K_3",
                "text": "3",
                "width": "104"
              },
              {
                "id": "K_4",
                "text": "4",
                "width": "104"
              },
              {
                "id": "K_5",
                "text": "5",
                "width": "104"
              },
              {
                "id": "K_6",
                "text": "6",
                "width": "104"
              },
              {
                "id": "K_7",
                "text": "7",
                "width": "104"
              },
              {
                "id": "K_8",
                "text": "8",
                "width": "104"
              },
              {
                "id": "K_9",
                "text": "9",
                "width": "104"
              },
              {
                "id": "K_0",
                "text": "0",
                "width": "104"
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_2",
                "text": "@",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_3",
                "text": "#",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_5",
                "text": "%",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_6",
                "text": "*",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_Y",
                "text": "=",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_U",
                "text": "\\",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_I",
                "text": "÷",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_O",
                "text": "×",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_P",
                "text": "-",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_RBRKT",
                "text": "+",
                "width": "104",
                "layer": "shift"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_4",
                "text": "~",
                "pad": "",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_C",
                "text": "\"",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_D",
                "text": "|",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_G",
                "text": "{",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_H",
                "text": "}",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_K",
                "text": "[",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_L",
                "text": "]",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_QUOTE",
                "text": "<",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_BKSLASH",
                "text": ">",
                "width": "104",
                "layer": "shift"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "104",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*abc*",
                "width": "120",
                "sp": "2",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "sp": "1"
              },
              {
                "id": "K_S",
                "text": "ْ",
                "layer": "shift"
              },
              {
                "id": "K_BKQUOTE",
                "text": "ٍ",
                "layer": "shift"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "330",
                "sp": "0"
              },
              {
                "id": "K_HYPHEN",
                "text": "ً",
                "layer": "shift"
              },
              {
                "id": "K_X",
                "text": "ٌ",
                "layer": "shift"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "100",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ]
  }
}
;
  this.KVER="10.0.1102.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, 0x4010, 0x31)) {   // Line 88
      r=m=1;
      k.KO(0,t,"©");
    }
    else if(k.KKM(e, 0x4010, 0xDE)) {   // Line 124
      r=m=1;
      k.KO(0,t,">");
    }
    else if(k.KKM(e, 0x4010, 0x33)) {   // Line 90
      r=m=1;
      k.KO(0,t,"#");
    }
    else if(k.KKM(e, 0x4010, 0x34)) {   // Line 91
      r=m=1;
      k.KO(0,t,"~");
    }
    else if(k.KKM(e, 0x4010, 0x35)) {   // Line 92
      r=m=1;
      k.KO(0,t,"%");
    }
    else if(k.KKM(e, 0x4010, 0x37)) {   // Line 94
      r=m=1;
      k.KO(0,t,"&");
    }
    else if(k.KKM(e, 0x4000, 0xDE)) {   // Line 70
      r=m=1;
      k.KO(0,t,"ط");
    }
    else if(k.KKM(e, 0x4010, 0x39)) {   // Line 96
      r=m=1;
      k.KO(0,t,")");
    }
    else if(k.KKM(e, 0x4010, 0x30)) {   // Line 97
      r=m=1;
      k.KO(0,t,"(");
    }
    else if(k.KKM(e, 0x4010, 0x38)) {   // Line 95
      r=m=1;
      k.KO(0,t,"_");
    }
    else if(k.KKM(e, 0x4010, 0xBB)) {   // Line 99
      r=m=1;
      k.KO(0,t,"ّ");
    }
    else if(k.KKM(e, 0x4000, 0xBC)&&k.KCM(1,t,"و",1)) {   // Line 34
      r=m=1;
      k.KO(1,t,"ؤ");
    }
    else if(k.KKM(e, 0x4000, 0xBC)) {   // Line 81
      r=m=1;
      k.KO(0,t,"و");
    }
    else if(k.KKM(e, 0x4000, 0xBD)) {   // Line 44
      r=m=1;
      k.KO(0,t,"َ");
    }
    else if(k.KKM(e, 0x4000, 0xBE)) {   // Line 82
      r=m=1;
      k.KO(0,t,"ز");
    }
    else if(k.KKM(e, 0x4000, 0xBF)) {   // Line 83
      r=m=1;
      k.KO(0,t,"ظ");
    }
    else if(k.KKM(e, 0x4010, 0xBA)) {   // Line 123
      r=m=1;
      k.KO(0,t,"گ");
    }
    else if(k.KKM(e, 0x4000, 0xBA)) {   // Line 69
      r=m=1;
      k.KO(0,t,"ك");
    }
    else if(k.KKM(e, 0x4010, 0xBC)) {   // Line 135
      r=m=1;
      k.KO(0,t,".");
    }
    else if(k.KKM(e, 0x4000, 0xBB)) {   // Line 45
      r=m=1;
      k.KO(0,t,"ّ");
    }
    else if(k.KKM(e, 0x4010, 0xBE)) {   // Line 136
      r=m=1;
      k.KO(0,t,"ژ");
    }
    else if(k.KKM(e, 0x4010, 0xBF)) {   // Line 137
      r=m=1;
      k.KO(0,t,"؟");
    }
    else if(k.KKM(e, 0x4010, 0x32)) {   // Line 89
      r=m=1;
      k.KO(0,t,"@");
    }
    else if(k.KKM(e, 0x4010, 0x41)) {   // Line 114
      r=m=1;
      k.KO(0,t,"ّ");
    }
    else if(k.KKM(e, 0x4010, 0x42)) {   // Line 132
      r=m=1;
      k.KO(0,t,"؛");
    }
    else if(k.KKM(e, 0x4010, 0x43)) {   // Line 130
      r=m=1;
      k.KO(0,t,"\"");
    }
    else if(k.KKM(e, 0x4010, 0x44)) {   // Line 116
      r=m=1;
      k.KO(0,t,"|");
    }
    else if(k.KKM(e, 0x4010, 0x45)) {   // Line 103
      r=m=1;
      k.KO(0,t,"ٍ");
    }
    else if(k.KKM(e, 0x4010, 0x46)) {   // Line 117
      r=m=1;
      k.KO(0,t,"پ");
    }
    else if(k.KKM(e, 0x4010, 0x47)) {   // Line 118
      r=m=1;
      k.KO(0,t,"}");
    }
    else if(k.KKM(e, 0x4010, 0x48)) {   // Line 119
      r=m=1;
      k.KO(0,t,"{");
    }
    else if(k.KKM(e, 0x4010, 0x49)) {   // Line 108
      r=m=1;
      k.KO(0,t,"÷");
    }
    else if(k.KKM(e, 0x4010, 0x4A)) {   // Line 120
      r=m=1;
      k.KO(0,t,"ـ");
    }
    else if(k.KKM(e, 0x4010, 0x4B)) {   // Line 121
      r=m=1;
      k.KO(0,t,"]");
    }
    else if(k.KKM(e, 0x4010, 0x4C)) {   // Line 122
      r=m=1;
      k.KO(0,t,"[");
    }
    else if(k.KKM(e, 0x4010, 0x4D)) {   // Line 134
      r=m=1;
      k.KO(0,t,"،");
    }
    else if(k.KKM(e, 0x4010, 0x4E)) {   // Line 133
      r=m=1;
      k.KO(0,t,":");
    }
    else if(k.KKM(e, 0x4010, 0x4F)) {   // Line 109
      r=m=1;
      k.KO(0,t,"×");
    }
    else if(k.KKM(e, 0x4010, 0x50)) {   // Line 110
      r=m=1;
      k.KO(0,t,"-");
    }
    else if(k.KKM(e, 0x4010, 0x51)) {   // Line 101
      r=m=1;
      k.KO(0,t,"ُ");
    }
    else if(k.KKM(e, 0x4010, 0x52)) {   // Line 104
      r=m=1;
      k.KO(0,t,"ً");
    }
    else if(k.KKM(e, 0x4010, 0x53)) {   // Line 115
      r=m=1;
      k.KO(0,t,"ْ");
    }
    else if(k.KKM(e, 0x4010, 0x54)) {   // Line 105
      r=m=1;
      k.KO(0,t,"ڤ");
    }
    else if(k.KKM(e, 0x4010, 0x55)) {   // Line 107
      r=m=1;
      k.KO(0,t,"\\");
    }
    else if(k.KKM(e, 0x4010, 0x56)) {   // Line 131
      r=m=1;
      k.KO(0,t,"!");
    }
    else if(k.KKM(e, 0x4010, 0x57)) {   // Line 102
      r=m=1;
      k.KO(0,t,"ٌ");
    }
    else if(k.KKM(e, 0x4010, 0x58)) {   // Line 129
      r=m=1;
      k.KO(0,t,"ٌ");
    }
    else if(k.KKM(e, 0x4010, 0x59)) {   // Line 106
      r=m=1;
      k.KO(0,t,"=");
    }
    else if(k.KKM(e, 0x4010, 0x5A)) {   // Line 128
      r=m=1;
      k.KO(0,t,"،");
    }
    else if(k.KKM(e, 0x4000, 0xDB)) {   // Line 57
      r=m=1;
      k.KO(0,t,"ج");
    }
    else if(k.KKM(e, 0x4000, 0xDC)) {   // Line 71
      r=m=1;
      k.KO(0,t,"ذ");
    }
    else if(k.KKM(e, 0x4000, 0xDD)) {   // Line 58
      r=m=1;
      k.KO(0,t,"د");
    }
    else if(k.KKM(e, 0x4010, 0x36)) {   // Line 93
      r=m=1;
      k.KO(0,t,"*");
    }
    else if(k.KKM(e, 0x4010, 0xBD)) {   // Line 98
      r=m=1;
      k.KO(0,t,"ً");
    }
    else if(k.KKM(e, 0x4000, 0xC0)) {   // Line 43
      r=m=1;
      k.KO(0,t,"ِ");
    }
    else if(k.KKM(e, 0x4000, 0x41)) {   // Line 60
      r=m=1;
      k.KO(0,t,"ش");
    }
    else if(k.KKM(e, 0x4000, 0x42)) {   // Line 24
      r=m=1;
      k.KO(0,t,"ال");
    }
    else if(k.KKM(e, 0x4000, 0x43)) {   // Line 76
      r=m=1;
      k.KO(0,t,"ر");
    }
    else if(k.KKM(e, 0x4000, 0x44)) {   // Line 62
      r=m=1;
      k.KO(0,t,"ي");
    }
    else if(k.KKM(e, 0x4000, 0x45)) {   // Line 49
      r=m=1;
      k.KO(0,t,"ث");
    }
    else if(k.KKM(e, 0x4000, 0x46)) {   // Line 63
      r=m=1;
      k.KO(0,t,"ب");
    }
    else if(k.KKM(e, 0x4000, 0x47)&&k.KCM(2,t,"اء",2)) {   // Line 38
      r=m=1;
      k.KO(2,t,"اءَا");
    }
    else if(k.KKM(e, 0x4000, 0x47)&&k.KCM(1,t,"ا",1)) {   // Line 28
      r=m=1;
      k.KO(1,t,"أ");
    }
    else if(k.KKM(e, 0x4000, 0x47)&&k.KCM(1,t,"ء",1)) {   // Line 36
      r=m=1;
      k.KO(1,t,"آ");
    }
    else if(k.KKM(e, 0x4000, 0x47)) {   // Line 64
      r=m=1;
      k.KO(0,t,"ا");
    }
    else if(k.KKM(e, 0x4000, 0x48)) {   // Line 65
      r=m=1;
      k.KO(0,t,"ل");
    }
    else if(k.KKM(e, 0x4000, 0x49)) {   // Line 54
      r=m=1;
      k.KO(0,t,"ه");
    }
    else if(k.KKM(e, 0x4000, 0x4A)) {   // Line 66
      r=m=1;
      k.KO(0,t,"ت");
    }
    else if(k.KKM(e, 0x4000, 0x4B)) {   // Line 67
      r=m=1;
      k.KO(0,t,"ن");
    }
    else if(k.KKM(e, 0x4000, 0x4C)) {   // Line 68
      r=m=1;
      k.KO(0,t,"م");
    }
    else if(k.KKM(e, 0x4000, 0x4D)) {   // Line 80
      r=m=1;
      k.KO(0,t,"ة");
    }
    else if(k.KKM(e, 0x4000, 0x4E)&&k.KCM(1,t,"ى",1)) {   // Line 32
      r=m=1;
      k.KO(1,t,"ئ");
    }
    else if(k.KKM(e, 0x4000, 0x4E)) {   // Line 79
      r=m=1;
      k.KO(0,t,"ى");
    }
    else if(k.KKM(e, 0x4000, 0x4F)) {   // Line 55
      r=m=1;
      k.KO(0,t,"خ");
    }
    else if(k.KKM(e, 0x4000, 0x50)) {   // Line 56
      r=m=1;
      k.KO(0,t,"ح");
    }
    else if(k.KKM(e, 0x4000, 0x51)) {   // Line 47
      r=m=1;
      k.KO(0,t,"ض");
    }
    else if(k.KKM(e, 0x4000, 0x52)) {   // Line 50
      r=m=1;
      k.KO(0,t,"ق");
    }
    else if(k.KKM(e, 0x4000, 0x53)) {   // Line 61
      r=m=1;
      k.KO(0,t,"س");
    }
    else if(k.KKM(e, 0x4000, 0x54)) {   // Line 51
      r=m=1;
      k.KO(0,t,"ف");
    }
    else if(k.KKM(e, 0x4000, 0x55)) {   // Line 53
      r=m=1;
      k.KO(0,t,"ع");
    }
    else if(k.KKM(e, 0x4000, 0x56)&&k.KCM(1,t,"ء",1)) {   // Line 30
      r=m=1;
      k.KO(1,t,"إ");
    }
    else if(k.KKM(e, 0x4000, 0x56)) {   // Line 77
      r=m=1;
      k.KO(0,t,"ء");
    }
    else if(k.KKM(e, 0x4000, 0x57)) {   // Line 48
      r=m=1;
      k.KO(0,t,"ص");
    }
    else if(k.KKM(e, 0x4000, 0x58)) {   // Line 75
      r=m=1;
      k.KO(0,t,"ُ");
    }
    else if(k.KKM(e, 0x4000, 0x59)) {   // Line 52
      r=m=1;
      k.KO(0,t,"غ");
    }
    else if(k.KKM(e, 0x4000, 0x5A)) {   // Line 74
      r=m=1;
      k.KO(0,t,"،");
    }
    else if(k.KKM(e, 0x4010, 0xDB)) {   // Line 111
      r=m=1;
      k.KO(0,t,"چ");
    }
    else if(k.KKM(e, 0x4010, 0xDC)) {   // Line 125
      r=m=1;
      k.KO(0,t,"<");
    }
    else if(k.KKM(e, 0x4010, 0xDD)) {   // Line 112
      r=m=1;
      k.KO(0,t,"+");
    }
    else if(k.KKM(e, 0x4010, 0xC0)) {   // Line 87
      r=m=1;
      k.KO(0,t,"ٍ");
    }
    return r;
  };
}
