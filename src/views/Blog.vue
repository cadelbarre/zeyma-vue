<template>
	<section id="section__blog">

		<section class="hero is-info is-medium is-bold">
		    <div class="hero-body" id="hero__blog" :style="img">
		        <div class="container has-text-centered">
		            <h1 class="title is-2 text-shadow">{{articule.title}}</h1>
		        </div>
		    </div>
		</section>


		<div class="container">
			<!-- START ARTICLE FEED -->
			<section class="articles">
				<div class="column is-8 is-offset-2">
					<!-- START ARTICLE -->
					<div class="card article">
						<div class="card-content">
							<div class="media">
								<div class="media-content has-text-centered">
									<p class="title article-title">{{articule.title}}</p>
									<div class="tags has-addons level-item">
										<span class="tag is-rounded is-info">{{articule.user}}</span>
										<span class="tag is-rounded">{{articule.date}} - {{articule.category}}</span>
									</div>
								</div>
							</div>
							<div class="content article-body">
								<p>{{articule.body}}</p>
							</div>
						</div>
					</div>
					<!-- END ARTICLE -->
					
				</div>

			</section>
			<!-- END ARTICLE FEED -->
		</div>
	</section>
</template>

<script>
/*--------------  Firebase  --------------*/
import Firebase from 'firebase';
import "firebase/firestore";
import Config from '@/config/config';

export default {
  name: 'Blog',
  data () {
  	return {
  		articule: {},
  		img: '',
  	};
  },
  props: {
   year: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: 1
    }
  },
  created(){

  	if (!Firebase.apps.length) {
  		Firebase.initializeApp(Config);
  	}

  	/*--------------  Obtener articulos del blog Real DataBase  --------------*/
    let real = Firebase.database();
    let dataBlog = real.ref('post/' + this.year).on('value', snapshot => {
    	this.articule = snapshot.val()
    	// console.log(this.articule);
    	// this.img = "background-image: url(" + this.articule.imagen + ");"

    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/css/blog.css');
</style>

