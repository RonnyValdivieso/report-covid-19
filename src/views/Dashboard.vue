<template>
	<div>
		<!-- <WidgetsDropdown/> -->
		<GlobalStats/>
		<CRow>
			<CCol md="12">
				<CCard>
					<CCardHeader>
						Report: Coronavirus cases
						<div class="card-header-actions">
							Last update: {{ lastUpdate | dateString }}
						</div>
					</CCardHeader>
					<CCardBody>
						<CDataTable
							class="mb-0 table-outline"
							hover
							:items="data"
							:fields="tableFields"
							head-color="light"
							no-sorting
						>
						</CDataTable>
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	</div>
</template>

<script>
import MainChartExample from './charts/MainChartExample'
import GlobalStats from './stats/GlobalStats'
import WidgetsBrand from './widgets/WidgetsBrand'
import axios from "axios";

// let API_URL = process.env.API_URL;
let API_URL = 'https://api.covid19api.com';

export default {
	name: 'Dashboard',
	components: {
		MainChartExample,
		GlobalStats,
		WidgetsBrand
	},
	data () {
		return {
			selected: 'Month',
			lastUpdate: null,
			data: null,
			tableItems: [
				{
					avatar: { url: 'img/avatars/1.jpg', status: 'success' },
					user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
					country: { name: 'USA', flag: 'cif-us' },
					usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
					payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
					activity: '10 sec ago'
				},
				{
					avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
					user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
					country: { name: 'Brazil', flag: 'cif-br' },
					usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
					payment: { name: 'Visa', icon: 'cib-cc-visa' },
					activity: '5 minutes ago'
				},
				{
					avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
					user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
					country: { name: 'India', flag: 'cif-in' },
					usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
					payment: { name: 'Stripe', icon: 'cib-stripe' },
					activity: '1 hour ago'
				},
				{
					avatar: { url: 'img/avatars/4.jpg', status: '' },
					user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
					country: { name: 'France', flag: 'cif-fr' },
					usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
					payment: { name: 'PayPal', icon: 'cib-paypal' },
					activity: 'Last month'
				},
				{
					avatar: { url: 'img/avatars/5.jpg', status: 'success' },
					user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
					country: { name: 'Spain', flag: 'cif-es' },
					usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
					payment: { name: 'Google Wallet', icon: 'cib-google-pay' },
					activity: 'Last week'
				},
				{
					avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
					user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
					country: { name: 'Poland', flag: 'cif-pl' },
					usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
					payment: { name: 'Amex', icon: 'cib-cc-amex' },
					activity: 'Last week'
				}
			],
			tableFields: [
				{ key: 'Country', label:'Country', },
				{ key: 'TotalConfirmed', label: 'Total Confirmed', _classes: 'text-center' },
				{ key: 'NewConfirmed', label: 'New Confirmed', _classes: 'text-center' },
				{ key: 'TotalDeaths', label: 'Total Deaths', _classes: 'text-center' },
				{ key: 'NewDeaths', label: 'New Deaths', _classes: 'text-center' },
				{ key: 'TotalRecovered', label: 'Total Recovered', _classes: 'text-center' },
				{ key: 'NewRecovered', label: 'New Recovered', _classes: 'text-center' },
			]
		}
	},
	mounted () {
		axios
			.get(`${API_URL}/summary`)
			.then(response => {
				this.data = response.data.Countries.filter(x => x.Country != "");
				this.lastUpdate = response.data.Date;
			});
	},
	methods: {
		color (value) {
			let $color
			if (value <= 25) {
				$color = 'info'
			} else if (value > 25 && value <= 50) {
				$color = 'success'
			} else if (value > 50 && value <= 75) {
				$color = 'warning'
			} else if (value > 75 && value <= 100) {
				$color = 'danger'
			}
			return $color
		}
	}
}
</script>
