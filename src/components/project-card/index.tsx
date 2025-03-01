import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  technologies?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  technologies = [],
}) => {
  const theme = useTheme();

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0px 12px 20px -10px ${theme.palette.primary.main}40`,
        },
        bgcolor: 'background.paper',
        borderRadius: 2,
        overflow: 'hidden',
      }}
      elevation={4}
    >
      <Box sx={{ 
        position: 'relative',
        paddingTop: '56.25%', // 16:9 aspect ratio
        width: '100%',
        overflow: 'hidden',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, pb: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        
        {technologies.length > 0 && (
          <Stack direction="row" sx={{ mt: 2, flexWrap: 'wrap', gap: 1, p: 0 }}>
            {technologies.map((tech) => (
              <Chip
                key={tech} 
                label={tech} 
                size="small" 
                sx={{ 
                  bgcolor: `${theme.palette.primary.main}20`,
                  color: theme.palette.primary.light,
                  fontSize: '0.7rem',
                  margin: 0,
                }} 
              />
            ))}
          </Stack>
        )}
      </CardContent>
      <CardActions sx={{ padding: 2, pt: 1 }}>
        <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
          <Button 
            variant="outlined" 
            fullWidth
            startIcon={<GitHubIcon />}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            GitHub
          </Button>
          <Button 
            variant="contained" 
            fullWidth
            startIcon={<LaunchIcon />}
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            Live Demo
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;