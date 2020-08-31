<template>
	<section class="section">
    <img src="" alt="" id="myimg">
    <button @click="pruebas">save</button>
	</section>
</template>

<script>
import Firebase from 'firebase';
import "firebase/firestore";
import Config from '@/config/config';


export default {
  name: 'prueba',
  data(){
  	return{
  		file: null,
      Firebase,
      img:[]
  	}
  },
  methods: {
  	pruebas(){
  		let app = Firebase.initializeApp(Config);
      let db = Firebase.storage();
      let storeRef = db.refFromURL('gs://zeymaweb.appspot.com/slides');
      console.log(storeRef);
      storeRef.getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'

      // Or inserted into an <img> element:
      console.log(url);
      var img = document.getElementById('myimg');
      img.src = url;
      }).catch(function(error) {
      // Handle any errors
      });

  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>