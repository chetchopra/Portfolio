import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const SocialAnimated = () => (
  <div>
    <Button animated='vertical' href="https://github.com/chetchopra"
		target='_blank' rel='noopener noreferrer'>
      <Button.Content visible>
				<Icon name='github' size='large'color='black'/>
			</Button.Content>
      <Button.Content hidden>
        Github
      </Button.Content>
    </Button>

		<Button animated='vertical' href="https://linkedin.com/in/chetchopra"
		target='_blank' rel='noopener noreferrer'>
      <Button.Content visible>
				<Icon name='linkedin' size='large'color='black'/>
			</Button.Content>
      <Button.Content hidden>
        LinkedIn
      </Button.Content>
    </Button>

		<Button animated='vertical' href = "mailto: chopra.chet@gmail.com"
		target='_blank' rel='noopener noreferrer'>
      <Button.Content visible>
				<Icon name='mail' size='large'color='black'/>
			</Button.Content>
      <Button.Content hidden>
        Email
      </Button.Content>
    </Button>

  </div>
)

export default SocialAnimated