export default [
  {
    title: 'STT',
    dataIndex: 'rowIndex',
    scopedSlots: { customRender: 'rowIndex' },
    align: 'center',
    ellipsis: true,
    width: 50
  },
  {
    title: 'Tên bài viết',
    dataIndex: 'NAME',
    scopedSlots: { customRender: 'NAME' },
    align: 'left',
    ellipsis: true,
    width: 200
  },
  {
    title: 'Nội dung',
    dataIndex: 'content',
    scopedSlots: { customRender: 'content' },
    align: 'left',
    ellipsis: true,
    width: 180
  },
  {
    title: 'Ghi chú',
    dataIndex: 'DESCRIPTION',
    scopedSlots: { customRender: 'DESCRIPTION' },
    align: 'left',
    ellipsis: true,
    width: 180
  },
  {
    title: 'Trạng thái',
    dataIndex: 'STATUS',
    scopedSlots: { customRender: 'STATUS' },
    align: 'center',
    ellipsis: true,
    width: 120
  },
  {
    title: 'Thao tác',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
    width: 80,
    align: 'center'
  }
]
