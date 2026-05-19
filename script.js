const bandwidthRateInput = document.getElementById('bandwidthRate');
const bandwidthUsageInput = document.getElementById('bandwidthUsage');
const backendRateInput = document.getElementById('backendRate');
const backendHoursInput = document.getElementById('backendHours');
const bandwidthCostEl = document.getElementById('bandwidthCost');
const backendCostEl = document.getElementById('backendCost');
const totalCostEl = document.getElementById('totalCost');
const calculateBtn = document.getElementById('calculateBtn');

const formatRupiah = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
};

const calculateCosts = () => {
  const bandwidthRate = Number(bandwidthRateInput.value) || 0;
  const bandwidthUsage = Number(bandwidthUsageInput.value) || 0;
  const backendRate = Number(backendRateInput.value) || 0;
  const backendHours = Number(backendHoursInput.value) || 0;

  const bandwidthCost = bandwidthRate * bandwidthUsage;
  const backendCost = backendRate * backendHours;
  const totalCost = bandwidthCost + backendCost;

  bandwidthCostEl.textContent = formatRupiah(bandwidthCost);
  backendCostEl.textContent = formatRupiah(backendCost);
  totalCostEl.textContent = formatRupiah(totalCost);
};

const applyQueryParameters = () => {
  const params = new URLSearchParams(window.location.search);

  if (params.has('bandwidthRate')) {
    bandwidthRateInput.value = params.get('bandwidthRate');
  }
  if (params.has('bandwidthUsage')) {
    bandwidthUsageInput.value = params.get('bandwidthUsage');
  }
  if (params.has('backendRate')) {
    backendRateInput.value = params.get('backendRate');
  }
  if (params.has('backendHours')) {
    backendHoursInput.value = params.get('backendHours');
  }
};

calculateBtn.addEventListener('click', calculateCosts);
window.addEventListener('load', () => {
  applyQueryParameters();
  calculateCosts();
});
