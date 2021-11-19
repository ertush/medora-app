const barChartData = {
    labels: ['Carrots', 'Beans', 'Maize', 'Millet', 'Wheat', 'tomatoes'],
    datasets: [
      {
        label: '# of bags',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  
  const barChartOptions = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'monthly farm produce 2020',
      },
    },
  }
  

  const pieChartData = {
    labels: ['Carrots', 'Beans', 'Maize', 'Millet', 'Wheat', 'tomatoes'],
    datasets: [
      {
        label: '# of Acres',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const lineChartData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '% Count',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }
  
  const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  
  const rand = () => Math.round(Math.random() * 20 - 10)

  const scatterChartData = {
    datasets: [
      {
        label: 'A dataset',
        data: [
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
        ],
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  }
  
  const scatterChartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  const groupedBarData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Red Count',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: '# of Blue Count',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
        stack: 'Stack 0',
      },
      {
        label: '# of Green Count',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 1',
      },
    ],
  };
  
  const groupedBarOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const multiAxisData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '% Count',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: '# of No Count',
        data: [1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
    ],
  };
  
  const multiAxisOptions = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  }

  const multiTypeData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        fill: false,
        data: [rand(), rand(), rand(), rand(), rand(), rand()],
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(255, 99, 132)',
        data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: 'rgb(75, 192, 192)',
        data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      },
    ],
  };
  
  
const polarData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '% Count',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const stackedBarData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Red Count',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '# of Blue Count',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: '# of Green Count',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  
  const stackedBarOptions = {
    scales: {
      y: {
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        stacked: true
      }
    }
  };
  
  
  
  export {
      barChartData, 
      barChartOptions, 
      pieChartData,
      lineChartData,
      lineChartOptions,
      scatterChartData,
      scatterChartOptions,
      groupedBarData,
      groupedBarOptions,
      multiAxisData,
      multiAxisOptions,
      multiTypeData,
      polarData, 
      stackedBarData,
      stackedBarOptions
    }