<template>
	<section>
		<div class="hero" id="info__top">
		  <div class="hero-body">
		      <div class="container">
		        <h1 class="title is-2 is-uppercase has-text-weight-bold">
		          DIRECTORIO
		        </h1>
		      </div>
		    </div>
		</div>
		<div class="section is-medium has-shadow">
			<div class="container">
				<div class="columns">
					<div class="column is-12 mb-6 has-text-centered">
						<h1 class="title is-1">Directorio General</h1>
						<p class="p-20">Bienvenidos a nuestro directorio general, no olvide contactarse a nuestras lineas de contacto PBX {{ json.telefono}}, {{ json.telefono2}} ó nuestras lineas moviles {{ json.celular}}</p>
					</div>
				</div>
				<div class="columns is-10 is-centered" data-aos-duration="1700" data-aos="fade-right">
					<table>
						<thead>
							<tr>
								<th class="area">Área</th>
								<th class="nombre">Nombre</th>
								<th class="extension">Extensión</th>
								<th class="correo">Correo</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td rowspan="4">Ventas</td>
								<td>Yarleidis Charris</td>
								<td>101</td>
								<td>ycharris@zeyma.co</td>
							</tr>
							<tr>
								<td>Shirley Perez</td>
								<td>102</td>
								<td>shiperez@zeyma.co</td>
							</tr>
							<tr>
								<td>Karina Madrid</td>
								<td>103</td>
								<td>kmadrid@zeyma.co</td>
							</tr>
							<tr>
								<td>Auxiliar Ventas</td>
								<td>104</td>
								<td></td>
							</tr>

							<tr>
								<td>Bodega</td>
								<td>Armando de la Cruz</td>
								<td>105</td>
								<td></td>
							</tr>
							<tr>
								<td rowspan="3">Administrativa</td>
								<td>Mauricio Delbarre</td>
								<td>106</td>
								<td rowspan="2">czeyma@hotmail.com</td>
							</tr>
							<tr>
								<td>Zenia de la Cruz</td>
								<td>107</td>
							</tr>
							<tr>
								<td>Nazly Galindo</td>
								<td>110</td>
								<td>facturacion@zeyma.co</td>
							</tr>
							<tr>
								<td>Contabilidad</td>
								<td>Auxiliar Contable</td>
								<td>108</td>
								<td>contabilidad@zeyma.co</td>
							</tr>
							<tr>
								<td rowspan="3">Transferencista</td>
								<td>Transferencista 1</td>
								<td>111</td>
								<td></td>
							</tr>
							<tr>
								<td>Transferencista 2</td>
								<td>112</td>
								<td></td>
							</tr>
							<tr>
								<td>Transferencista 3</td>
								<td>113</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import json from '@/assets/data/data-general.json';

export default {
  name: 'Directorio',
  data(){
        return {
        	json
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>