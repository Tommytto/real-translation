// @flow
import { useState, useMemo } from 'react';
import useService from 'logic/hooks/use-service';
import type { TGeneratorProps } from 'services/TaskGeneratorService';

export default function useTaskSet(params: TGeneratorProps) {
    const taskGenerator = useService('taskGeneratorService');
    const taskSet = useMemo(() => taskGenerator.generateTaskSet(params), []);

    const [currentTask, setCurrentTask] = useState(() => taskSet.next());
    function nextTask() {
        setCurrentTask(taskSet.next());
    }
    return [currentTask, nextTask];
}
