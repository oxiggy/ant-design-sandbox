import React from 'react'
import { Layout, Steps, Button, message } from 'antd'
import { UserOutlined, SolutionOutlined, SmileOutlined } from '@ant-design/icons'
//
import AvatarStep from '../../components/AuthSteps/AvatarStep'
import PreferencesStep from '../../components/AuthSteps/PreferencesStep'
import FinishStep from '../../components/AuthSteps/FinishStep'


const { Step } = Steps

const steps = [
  {
    title: 'Аватар',
    icon: <UserOutlined />,
    content: <AvatarStep />,
  },
  {
    title: 'Предпочтения',
    icon: <SolutionOutlined />,
    content: <PreferencesStep />,
  },
  {
    title: 'Завершение',
    icon: <SmileOutlined />,
    content: <FinishStep />,
  },
]

export default function Auth() {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Layout
      style={{
        width: '100%',
        maxWidth: 900,
        background: 'transparent',
        padding: '120px 16px 64px',
        margin: '0 auto'
      }}
    >
      <Steps current={current}>
        {steps.map(item => (
          <Step
            key={item.title}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </Layout>
  )
}