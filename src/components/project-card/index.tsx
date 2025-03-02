import React, { useState, useRef } from 'react';
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shadow, setShadow] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const maxTilt = 5;
  const maxShadowOffset = 20;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    
    setTilt({
      x: -percentY * maxTilt,
      y: percentX * maxTilt
    });
    
    setShadow({
      x: -percentX * maxShadowOffset,
      y: -percentY * maxShadowOffset
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
    setShadow({ x: 0, y: 0 });
  };

  const dynamicBoxShadow = isHovering
    ? `${shadow.x}px ${shadow.y}px 20px 5px ${theme.palette.primary.light}30`
    : `0px 4px 8px 0px ${theme.palette.common.black}20`;

  return (
    <Card 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.2s ease-out',
        transform: isHovering 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        boxShadow: dynamicBoxShadow,
        bgcolor: 'background.paper',
        borderRadius: 2,
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
      }}
      elevation={0} 
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