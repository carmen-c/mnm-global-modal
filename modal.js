document.addEventListener('DOMContentLoaded',function(){const modalComponent=()=>{const countriesModal=document.querySelector("#country-input");const content=`
      <div class="country-modal-grey"></div>

        <div class="country-modal-btn-wrap">
          <button class="country-open-modal-btn">COUNTRIES </button>
        </div>

      <div class="country-modal country-container">
          <div class="country-modal-content country-row">
              <div class='close-button-wrap'>
                  <div class="country-close-btn">&times</div>
              </div>
  
              <div class="modal-image-wrapper-parent country-container">
                <div class="country-modal-header">
                  <a href="http://marcusnmarcus2020.7flowmarq.com" target="_blank">GLOBAL BRAND SITE</a>
                </div>
                  <div class="country-modal-wrapper countries-list country-row">
                  </div>
              </div>
          </div>
         
      </div>
      `;countriesModal.insertAdjacentHTML('beforeend',content);
      
      let countryInput=document.querySelector('.countries-list');
      
      let countriesObj={
        
        "continent":[{
          "continentName":"Africa",
          "countries":[{
            "country":{
              "countryName":"South Africa",
              "url":"https://marcusandmarcus.co.za"},
          }]},
                     
                     
          {"continentName":"Asia",
          "countries":[{
            "country":{
              "countryName":"China",
              "url":"https://marcuschina.com"},
            },{
            "country":{
              "countryName":'Hong Kong',
              "url":'https://marcusnmarcus.com.hk'}
            },{
            "country":{
              "countryName":'Indonesia',
              "url":'http://balitakita.com/category/marcusmarcus'}
            },{
            "country":{
              "countryName":'Korea',
              "url":'http://www.marcusnmarcus.co.kr'}
            },{
            "country":{
              "countryName":'Malaysia',
              "url":'https://www.marcusnmarcus.com.my'}
            },{
            "country":{
              "countryName":'Philippines',
              "url":'https://www.marcusnmarcus.com.ph/'},
            },{
            "country":{
              "countryName":'Singapore',
              "url":'https://www.itots.com.sg/collections/marcus-marcus'},
            },{
            "country":{
              "countryName":'Taiwan',
              "url":'http://www.vkidsbaby.com.tw'},
            },{
            "country":{
              "countryName":'Thailand',
              "url":'https://marcusnmarcus.com/where-to-buy/'},
            },{
            "country":{
              "countryName":'Japan',
              "url":'http://www.elfa.jp'},
            },{
              "country":{
              "countryName":'Vietnam',
              "url":'http://www.marcusnmarcus.vn'},
            }]},
                     
                     
          {"continentName":"Australia",
            "countries":[{
            "country":{
              "countryName":"Australia",
              "url":"https://www.marcusnmarcus.com.au/"}
          }]},
                     
                     
          {"continentName":"Europe",
            "countries":[{
              "country":{
              "countryName":"Bulgaria",
              "url":'https://www.bioin.gr/el/products_categories-126/marcus-marcus.htm',}
            },
            {"country":{
              "countryName":"Cyprus",
              "url":'https://www.bioin.gr/el/products_categories-126/marcus-marcus.htm',}
            },
            {"country":{
              "countryName":'Estonia',
              "url":'https://www.marcusnmarcus.eu/',}
            },
            {"country":{
              "countryName":'Greece',
              "url":'https://www.bioin.gr/el/products_categories-126/marcus-marcus.htm',}
            },
            {"country":{
              "countryName":'Latvia',
              "url":'https://www.marcusnmarcus.eu/',}
            },
            {"country":{
              "countryName":'Lithuania',
              "url":'https://www.marcusnmarcus.eu/',}
            },
            {"country":{
              "countryName":'Norway',
              "url":'https://www.sofusogsofia.no/search_result?keywords=marcus',}
            },
            {"country":{
              "countryName":'Switzerland',
              "url":'https://www.marcusnmarcus.ch/',}},
            ]
          },
                     
          {"continentName":"Middle East",
          "countries":[{
            "country":{
              "countryName":'UAE',
              "url":'https://antwork.ae/marcus-marcus/',},}
          ]},
                     
                     
          {"continentName":"North America",
          "countries":[{
            "country":{
              "countryName":'Canada',
              "url":'http://marcusnmarcus.com/',},},{
            "country":{
              "countryName":'USA',
              "url":'http://marcusnmarcus.com/',},}
          ]},
             
                     
          {"continentName":"South America",
            "countries":[{
              "country":{
                "countryName":"Brazil",
                "url":"https://marcusnmarcus.com/where-to-buy/"}}]}]}
      
countriesObj.continent.forEach(function(items){countryInput.insertAdjacentHTML('beforeend',`
          <div class="country-link">
            <div class="column-2-lg">
              <h3 class="country-link-header">
                ${items.continentName}
              </h3>
            ${items.countries.map(item=>`
              <div class="country-link-text">
                <a href="${item.country.url}">${item.country.countryName}</a>
              </div>
              `).join('')}
          </div>
        </div>
        `)});}
const modalFunctions=()=>{let modal=document.querySelector('.country-modal');let modalGrey=document.querySelector('.country-modal-grey');let openBtn=document.querySelector('.country-open-modal-btn');let closeBtn=document.querySelector('.country-close-btn');openBtn.addEventListener('click',openModal);closeBtn.addEventListener('click',closeModal);function openModal(){modal.style.display='block';modalGrey.style.display='block';}
function closeModal(){modal.style.display='none';modalGrey.style.display='none';}}
const runNav=()=>{modalComponent();modalFunctions();}
runNav();})
