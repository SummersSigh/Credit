import React, { useState } from 'react';
import { Input, Button, List, message } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const PersonHelp: React.FC = () => {
    // 用于存储聊天消息的状态，每条消息包含内容和方向（'right' 或 'left'）
    const [messages, setMessages] = useState<{ content: string; direction: 'right' | 'left' }[]>([]);
    // 用于存储用户在输入框中输入的内容
    const [inputValue, setInputValue] = useState<string>('');

    // 处理输入框内容变化的函数
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    // 处理发送消息的函数
    const handleSendMessage = () => {
        if (inputValue.trim()) {
            // 将用户发送的消息添加到消息列表中，方向为 'right'
            setMessages([...messages, { content: inputValue, direction: 'right' }]);
            // 清空输入框
            setInputValue('');

            // 模拟对方回复消息
            setTimeout(() => {
                const responseMessages = [
                    "收到，我会尽快处理。",
                    "好的，了解了。",
                    "请稍等一下。"
                ];
                const randomIndex = Math.floor(Math.random() * responseMessages.length);
                const responseMessage = responseMessages[randomIndex];
                // 将对方回复的消息添加到消息列表中，方向为 'left'
                setMessages([...messages, { content: inputValue, direction: 'right' }, { content: responseMessage, direction: 'left' }]);
            }, 1000);
        }
    };

    // 处理按下回车键发送消息的函数
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className='home' style={{ height: '600px', border: '1px solid #ccc', borderRadius: '4px', display: 'flex', flexDirection: 'column' }}>
            {/* 聊天内容展示区域 */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
                <List
                    dataSource={messages}
                    renderItem={(message) => (
                        <List.Item
                            style={{
                                display: 'flex',
                                justifyContent: message.direction === 'right' ? 'flex-end' : 'flex-start',
                                marginBottom: '8px'
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: message.direction === 'right' ? '#DCF8C6' : '#E5E5EA',
                                    padding: '8px 12px',
                                    borderRadius: '8px',
                                    maxWidth: '70%',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                {message.direction === 'right' && <RightOutlined style={{ marginLeft: '8px' }} />}
                                {message.direction === 'left' && <LeftOutlined style={{ marginRight: '8px' }} />}
                                <span>{message.content}</span>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
            {/* 输入框和发送按钮区域 */}
            <div style={{ display: 'flex', padding: '16px', borderTop: '1px solid #ccc' }}>
                <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="请输入聊天内容"
                    style={{ flex: 1, marginRight: '8px' }}
                />
                <Button type="primary" onClick={handleSendMessage}>
                    发送
                </Button>
            </div>
        </div>
    );
};

export default PersonHelp;