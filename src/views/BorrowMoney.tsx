import React, { useState, useRef } from 'react';
import { Button, Table, Modal, message } from 'antd';
import { saveAs } from 'file-saver';
import blankPdf from './contract.pdf'; // 请替换为实际的空白 PDF 文件路径

// 模拟合同数据
const contractData = [
  {
    key: '1',
    contractName: '合同1',
    uploadTime: '2024-01-01 10:00',
    uploader: '张三',
    reviewStatus: '已审核',
  },
  {
    key: '2',
    contractName: '合同2',
    uploadTime: '2024-01-02 11:00',
    uploader: '李四',
    reviewStatus: '待审核',
  },
];

// 定义表格列
const columns = [
  {
    title: '合同名称',
    dataIndex: 'contractName',
    key: 'contractName',
  },
  {
    title: '上传时间',
    dataIndex: 'uploadTime',
    key: 'uploadTime',
  },
  {
    title: '上传人',
    dataIndex: 'uploader',
    key: 'uploader',
  },
  {
    title: '审核状态',
    dataIndex: 'reviewStatus',
    key: 'reviewStatus',
  },
  {
    title: '操作',
    key: 'action',
    render: (_:any, record:any) => (
      <span>
        <Button type="link" >
          详情
        </Button>
        <Button type="link" >
          作废
        </Button>
      </span>
    ),
  },
];

const BorrowMoney = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const [localContractData, setLocalContractData] = useState(contractData);

  const handleDownloadContractTemplate = () => {
    // 模拟下载空白 PDF 文件
    saveAs(blankPdf, 'contract_template.pdf');
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf') {
        // 这里可以添加实际的文件上传逻辑
        console.log('上传文件:', file);
        message.success('文件上传成功');
        setIsModalVisible(false);

        // 添加新的合同记录到列表中
        const newContract = {
          key: String(localContractData.length + 1),
          contractName: file.name,
          uploadTime: new Date().toLocaleString(),
          uploader: '未知', // 可以根据实际情况修改
          reviewStatus: '未审核',
        };
        setLocalContractData([...localContractData, newContract]);
      } else {
        message.error('仅支持上传 PDF 格式的文件');
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf') {
        // 这里可以添加实际的文件上传逻辑
        console.log('上传文件:', file);
        message.success('文件上传成功');
        setIsModalVisible(false);

        // 添加新的合同记录到列表中
        const newContract = {
          key: String(localContractData.length + 1),
          contractName: file.name,
          uploadTime: new Date().toLocaleString(),
          uploader: '未知', // 可以根据实际情况修改
          reviewStatus: '未审核',
        };
        setLocalContractData([...localContractData, newContract]);
      } else {
        message.error('仅支持上传 PDF 格式的文件');
      }
    }
  };


  return (
    <div className='home'>
      {/* 按钮区域 */}
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" style={{ marginRight: 8 }} onClick={showModal}>
          上传合同
        </Button>
        <Button onClick={handleDownloadContractTemplate}>下载合同模板</Button>
      </div>
      {/* 合同列表 */}
      <Table columns={columns} dataSource={localContractData} />
      {/* 上传合同弹窗 */}
      <Modal
        title="上传合同"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div
          style={{
            backgroundColor: '#f0f0f0',
            padding: '20px',
            textAlign: 'center',
            border: '1px dashed #ccc',
            cursor: 'pointer',
          }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".pdf"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            ref={uploadInputRef}
          />
          <p onClick={() => uploadInputRef.current?.click()}>
            支持拖拽或点击上传
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default BorrowMoney;