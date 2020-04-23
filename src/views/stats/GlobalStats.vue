<template>
	<CRow>
		<CCol sm="6" lg="3">
			<CWidgetIcon
				v-bind:header="totalConfirmed | formatNumber"
				text="Total Confirmed"
				color="danger"
				:icon-padding="false"
			>
				<CIcon name="cil-meh" width="24"/>
			</CWidgetIcon>
		</CCol>
		<CCol sm="6" lg="3">
			<CWidgetIcon
				v-bind:header="totalDeaths | formatNumber"
				text="Total Deaths"
				color="dark"
				:icon-padding="false"
			>
				<CIcon name="cil-face-dead" width="24"/>
			</CWidgetIcon>
		</CCol>
		<CCol sm="6" lg="3">
			<CWidgetIcon
				v-bind:header="totalRecovered | formatNumber"
				text="Total Recovered"
				color="success"
				:icon-padding="false"
			>
				<CIcon name="cil-medical-cross" width="24"/>
			</CWidgetIcon>
		</CCol>
		<CCol sm="6" lg="3">
			<!-- <CWidgetIcon
				v-bind:header="totalRecovered | formatNumber"
				text="Total Recovered"
				color="primary"
				:icon-padding="false"
			>
				<CIcon name="cil-settings" width="24"/>
			</CWidgetIcon> -->
		</CCol>
	</CRow>
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'
import axios from "axios";

let API_URL = 'https://api.covid19api.com';

export default {
	name: 'GlobalStats',
	components: { CChartLineSimple, CChartBarSimple },
	data () {
		return {
			totalConfirmed: "0",
			totalDeaths: "0",
			totalRecovered: "0"
		}
	},
	mounted () {
		axios
			.get(`${API_URL}/summary`)
			.then(response => {
				const confirmedList = response.data.Countries.map(x => x.TotalConfirmed)
				this.totalConfirmed = confirmedList.reduce((a, b) => a + b, 0).toString()

				const deathList = response.data.Countries.map(x => x.TotalDeaths)
				this.totalDeaths = deathList.reduce((a, b) => a + b, 0).toString()

				const recoveredList = response.data.Countries.map(x => x.TotalRecovered)
				this.totalRecovered = recoveredList	.reduce((a, b) => a + b, 0).toString()

				this.lastUpdate = response.data.Date;
			});
	}
}
</script>
