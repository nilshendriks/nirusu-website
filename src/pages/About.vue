<template>
  <Layout>
    <h1 class="">About me</h1>
    <div class="grid">
      <figure class="photo l-floatRight fullWidth">
        <g-image src="~/assets/me_001.jpg" />
      </figure>
      <div class="content">
        <p>Hi, I’m Nils Hendriks, a.k.a. nirusu. I’ve been working in web development since 1995. In 2007, I moved to Singapore and in 2011 to Tokyo, where I worked as a freelance <em>Front End Web Developer.</em></p>
        <p>Photography has been my number one passion for as long as I can remember. And remembering brings back the smell of chemicals developing film at the attic. Now digital, I focus on photographing people. On the streets of wherever and in a pop-up studio.</p>
        <!-- <p>Now, back in Amsterdam, The Netherlands I'm running my own studio, called <em>nirusu</em> and offering a variety of services like web development, design, photography and 3D visualisation.</p> -->
        <!-- <p>As a side project I started <a href="http://adifferentindex.com"><em>A Different Index</em></a> as a personal visual archive of everything I find interesting. Most likely it has something to do with design (in its broadest sense).</p> -->
        <!-- <p>My personal photo portfolio can be <a href="http://nilshendriks.com">found here</a></p> -->
        <p>Follow me on <a href="https://instagram.com/nirususan">Instagram</a> <!-- or check out my <a href="https://www.linkedin.com/in/nilshendriks/">LinkedIn profile</a>.--></p>
      </div>
    </div>
    <section
      class="nh-section section-skills"
      title="Section 2: This section is about the web development skills of Nils Hendriks."
    >
      <h2>Skills</h2>
      <div class="nh-section--skills">
        <div
          class="mdl-skillamount"
          data-skill="html"
          data-amount="100%"
        >
          <label class="mdl-label">
            HTML
            <g-image src="~/assets/images/file_type_html.svg" />
          </label>
          <div class="mdl-bar">
            <div class="mdl-innerbar">100%</div>
          </div>
        </div>
        <div
          class="mdl-skillamount"
          data-skill="css"
          data-amount="100%"
        >
          <label class="mdl-label">CSS
            <g-image src="~/assets/images/file_type_css.svg" />
          </label>
          <div class="mdl-bar">
            <div class="mdl-innerbar">100%</div>
          </div>
        </div>
        <div
          class="mdl-skillamount"
          data-skill="js"
          data-amount="60%"
        >
          <label class="mdl-label">JS
            <g-image src="~/assets/images/file_type_js_official.svg" />
          </label>
          <div class="mdl-bar">
            <div class="mdl-innerbar">65%</div>
          </div>
        </div>
        <div
          class="mdl-skillamount"
          data-skill="jquery"
          data-amount="85%"
        >
          <label class="mdl-label">Jquery
            <g-image src="~/assets/images/file_type_jquery.svg" />
          </label>
          <div class="mdl-bar">
            <div class="mdl-innerbar">85%</div>
          </div>
        </div>
        <!-- <div
          class="mdl-skillamount"
          data-skill="react"
          data-amount="1%"
        >
          <label class="mdl-label">React.js
            <g-image src="~/assets/images/file_type_reactjs.svg" />
          </label>
          <div class="mdl-bar">
            <div class="mdl-innerbar">1%</div>
          </div>
        </div> -->
        <div
          class="mdl-skillamount"
          data-skill="vue"
          data-amount="25%"
        >
          <label class="mdl-label">Vue.js
            <g-image src="~/assets/images/file_type_vue.svg" />
          </label>
          <div class="mdl-bar">
            <div class="mdl-innerbar">25%</div>
          </div>
        </div>
      </div>
      <h3>Other techniques <span class="amp">&amp;</span> workflows</h3>
      <ul class="mdl-techniques">
        <li
          class="mdl-techniques__technique"
          title="SCSS"
        >SCSS</li>
        <li
          class="mdl-techniques__technique"
          title="webpack"
        >webpack</li>
        <li
          class="mdl-techniques__technique"
          title="gulp"
        >gulp</li>
        <li
          class="mdl-techniques__technique"
          title="NPM"
        >NPM</li>
        <li
          class="mdl-techniques__technique"
          title="PHP"
        >PHP</li>
      </ul>
    </section>
    <!-- <section class="">
      <h2>What</h2>
      <article>
        <div class="column">
          <h3>Web Development</h3>
          <p>Front End Web Development for templates, websites with CMS &amp; Email Templates.</p>
        </div>
        <div class="column">
          <h3>Archviz</h3>
          <p>Architectural Visualizations, interiors, exteriors, light studies, 360 panoramas and 2D floorpans.</p>
        </div>
        <div class="column">
          <h3>Product Visualization</h3>
          <p>Product Visualizations, studio shots, in-use context shots.</p>
        </div>
        <div class="column">
          <h3>Other</h3>
          <p>Design &amp; realisation of logo's, brand identity, i.e. business cards and t-shirts etc.</p>
        </div>
      </article>
    </section> -->
    <!-- <section> ## Worked on <article markdown="1"> - Grecophile - Allianz - Heliyon - Asics - ABN - Rabobank - Provincie Noord Holland - Brandweer - De Jonge Akademie - KK Women’s and Children’s Hospital in Vietnam - Youth Olympic Games Singapore - Algemene Pensioen Groep - ContactSG - Civil Aviation Authority Singapore - MPA Singapore - National University of Singapore - Disney Australia - Vodafone India </article>
    </section> -->
    <!-- <section> ## Commissioned by <article markdown="1"> - Edenspiekermann - AQ Tokyo - Qais - PebbleRoad - Buuuk - Enigmatry - Convertium - Grecophile - Slash24 - LindersDesign - Graphic Invention </article>
    </section> -->
    <!-- <section> ## Contact <article markdown="1"> Email : (email: info@nirusu.me)
    LinkedIn : (link:https://www.linkedin.com/in/nilshendriks/ text:LinkedIn profile) Twitter : (twitter: @nilshendriks) Instagram : (link:https://www.instagram.com/nirususan/ text:Instagram) ## Books used in workflow - *Flexible Typesetting* by Tim Brown - *Animation at work* by Rachel Nabors - *Webfont Handbook* by Bram Stein - *The New CSS Layout* by Rachel Andrew - *Accessibility for Everyone* by Laura Kalbag - *Sass for Web Designers* by Dan Cederholm - *Mobile First* by Luke Wroblewski - *CSS3 for Web Designers* by Dan Cederholm - *Responsive Web Design* by Ethan Marcotte - *HTML5 For Web Designers* by Jeremy Keith &amp; Rachel Andrew
      </article>
    </section> -->
  </Layout>
</template>
<script>
  export default {
    metaInfo: {
      title: 'About me'
    },
    mounted() {
      console.log('hey, im mounted');
      const callback = (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          //console.log(target);
          if (!isIntersecting) {
            // if (target.classList.contains("have-intersected-and-animated")) {
            //   target.classList.add("in-active");
            // }
            //return target.classList.remove("active");
          }
          if (isIntersecting) {
          //target.classList.remove("in-active");
            target.classList.add("active");
          //target.classList.add("have-intersected-and-animated");
          }
        });
      };

      const observer = new IntersectionObserver(callback, {
        root: document.querySelector("nh-section"),
        threshold: 1.0
      });

      document
        .querySelectorAll(".nh-section--skills")
        .forEach((el) => observer.observe(el));

    }
  }
</script>
<style>
:root {
   --skillamountHTML: 100%;
   --skillamountCSS: 100%;
   --skillamountJS: 55%;
   --skillamountjQuery: 75%;
   --skillamountReact: 1%;
   --skillamountVue:25%;
   --csscolour: #29a8de;
   --jscolour: #f6e000;
   --jquerycolour: #0769ad;
   --reactcolour: #00d8ff;
   --vuecolour: #3ab982;
   --speed: 0.9s;
   --delay: 0.5s;
}
 .mdl-skillamount {
   display: flex;
   align-items: center;
   grid-gap: 20px;
}
 .mdl-skillamount .mdl-label {
   flex: 1 1 51px;
   background-repeat: no-repeat;
   background-position: left center;
   background-size: contain;
   /* width: 51px;
   height: 57px;
   font-size: 0; */
}
 .mdl-skillamount .mdl-bar {
   background: lightgray;
   flex: 15 1 0;
   margin: 0;
}
 .mdl-skillamount .mdl-innerbar {
   width: 0%;
   height: 18px;
   background: #63da38;
   font-size: 0;
   /* transition: width 1s ease-in; */
}
 @keyframes skillprogressHTML {
   from {
     width: 0%;
  }
   to {
     width: var(--skillamountHTML);
  }
}

@keyframes skillprogressHTMLreverse {
   from {
     width: var(--skillamountHTML);
  }
   to {
     width: 0%;
  }
}

 @keyframes skillprogressCSS {
   from {
     width: 0%;
  }
   to {
     width: var(--skillamountCSS);
  }
}
 @keyframes skillprogressJS {
   from {
     width: 0%;
  }
   to {
     width: var(--skillamountJS);
  }
}
 @keyframes skillprogressjQuery {
   from {
     width: 0%;
  }
   to {
     width: var(--skillamountjQuery);
  }
}
 @keyframes skillprogressReact {
   from {
     width: 0%;
  }
   to {
     width: var(--skillamountReact);
  }
}
 @keyframes skillprogressVue {
   from {
     width: 0%;
  }
   to {
     width: var(--skillamountVue);
  }
}
 [data-skill="html"] .mdl-label {
   /* background-image: url("~/assets/images/file_type_html.svg"); */
}

 .active [data-skill="html"] .mdl-innerbar {
   background: #e64e17;
   /* animation: skillprogressHTML var(--speed) ease-in-out 0s 1 forwards; */
   animation: skillprogressHTML var(--speed) ease-in-out 0s 1 forwards;
}

/* .in-active.have-intersected-and-animated [data-skill="html"] .mdl-innerbar {
  background: #e64e17;
  animation: skillprogressHTMLreverse var(--speed) ease-in-out 0s 1 forwards;
} */


 [data-skill="css"] .mdl-label {
   /* background-image: url("../images/file_type_css.svg"); */
}
 .active [data-skill="css"] .mdl-innerbar {
   background: var(--csscolour);
   animation: skillprogressCSS var(--speed) ease-in-out var(--delay) 1 forwards;
}
 [data-skill="js"] .mdl-label {
   /* background-image: url("../images/file_type_js_official.svg"); */
}
 .active [data-skill="js"] .mdl-innerbar {
   background: var(--jscolour);
   animation: skillprogressJS var(--speed) ease-in-out var(--delay) 1 forwards;
}
 [data-skill="jquery"] .mdl-label {
   /* background-image: url("../images/skill_type_jquery.svg"); */
}
 .active [data-skill="jquery"] .mdl-innerbar {
   background: var(--jquerycolour);
   animation: skillprogressjQuery var(--speed) ease-in-out var(--delay) 1 forwards;
}
 [data-skill="react"] .mdl-label {
   /* background-image: url("../images/file_type_reactjs.svg"); */
}
 .active [data-skill="react"] .mdl-innerbar {
   background: var(--reactcolour);
   animation: skillprogressReact var(--speed) ease-in-out var(--delay) 1 forwards;
}
 [data-skill="vue"] .mdl-label {
   /* background-image: url("../images/file_type_vue.svg"); */
}
 .active [data-skill="vue"] .mdl-innerbar {
   background: var(--vuecolour);
   animation: skillprogressVue var(--speed) ease-in-out var(--delay) 1 forwards;
}

</style>
