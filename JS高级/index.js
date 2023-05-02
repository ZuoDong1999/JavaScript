const orders = [
    {
      id: 1,
      name: 'John Smith',
      address: '123 Main St',
      status: 'created',
      log: [
        {
          status: 'created',
          time: '2023-02-16 12:30:00'
        }
      ]
    },
    {
      id: 2,
      name: 'Jane Doe',
      address: '456 Second St',
      status: 'packed',
      log: [
        {
          status: 'created',
          time: '2023-02-16 10:00:00'
        },
        {
          status: 'packed',
          time: '2023-02-16 12:30:00'
        }
      ]
    },
    {
      id: 3,
      name: 'Bob Johnson',
      address: '789 Third St',
      status: 'shipped',
      log: [
        {
          status: 'created',
          time: '2023-02-15 10:00:00'
        },
        {
          status: 'packed',
          time: '2023-02-15 12:00:00'
        },
        {
          status: 'shipped',
          time: '2023-02-16 9:00:00'
        }
      ]
    }
  ];

  function getOrdersByStatus(str){
    return  orders.filter(element => {
       return element.status === str
    }).map((item) => {
        const {id,name,address,status,log} = item 
        return {
            id: id,
            name: name,
            address: address,
            status: status,
            log:log.filter((item) => {
                return item.status === str
            })
        }
        }).sort((a,b) => {
        return a.id - b.id
    })

  }

  console.log(getOrdersByStatus('created')); 