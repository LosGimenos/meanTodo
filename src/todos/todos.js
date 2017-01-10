import _ from 'lodash';

export default function($scope, todoFactory) {
  let params = {
    createHasInput: false
  };

  $scope.todos = [
    {
      task: 'do dishes',
      isCompleted: false,
      isEditing: false
    },
    {
      task: 'walk the dog',
      isCompleted: true,
      isEditing: false
    }
  ];

  $scope.onCompletedClick = todo => {
    todo.isCompleted = !todo.isCompleted;
  };

  $scope.onEditClick = todo => {
    todo.isEditing = true;
    todo.updatedTask = todo.task;
  };

  $scope.onCancelClick = todo => {
    todo.isEditing = false;
  };

  const { updateTask,
          createTask,
          deleteTask,
          watchCreateTaskInput} = todoFactory;

  $scope.updateTask = _.partial(updateTask);

  $scope.createTask = _.partial(createTask,
    $scope,
    params);

  $scope.deleteTask = _.partial(deleteTask,
    $scope);

  $scope.$watch('createTaskInput',
                _.partial(watchCreateTaskInput,
                  params,
                  $scope));
}
